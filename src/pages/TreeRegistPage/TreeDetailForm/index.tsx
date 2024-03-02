import { useLocation } from 'react-router-dom';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import Button from 'components/common/button';
import isEmptyObject from 'utils/isEmptyObject';
import formatDate from 'utils/dateUtils/formatDate';
import toCamelCase from 'utils/stringUtils/toCamelCase';
import TreeNameInput from './components/TreeNameInput';
import TreeLocation from './components/TreeLocation';
import DetailAddressInput from './components/DetailAddressInput';
import ExtraInput from './components/ExtraInput';
import BusinessDaysSelect from './components/BusinessDaysSelect';
import SpaceTypeSelect from './components/SpaceTypeSelect';
import PetAllowSelect from './components/PetAllowSelect';
import ExhibitionDateCalendar from './components/ExhibitionDateCalendar';
import { useRegistTree } from './hooks';
import {
  UnrefinedTreeRegistApiBody,
  TreeRegistAPIBody,
  TAddress,
  TreeRegistFormDatas,
  ServerExpectedFormData,
  NonFalsy,
} from './types';
import * as S from './style';

// TODO: BE에서 spaceType을 불리언으로 받아 처리하는 로직에 오류가 존재하는 것 같습니다.
// 오류가 해결되기 이전까지 spaceType은 request body에서 제외하고 서버에 요청하는 방향으로 코드를 작성해두었으니, 추후 수정해야 합니다.
function TreeRegiDetail() {
  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit } = methods;
  const { state } = useLocation();
  const addressData = validateAddress(state);
  const { regist } = useRegistTree();
  const { address, addressType, location, latLng } = addressData;

  const registTree = (data: FieldValues) => {
    const unrefinedBody = {
      ...data,
      ...latLng,
      // roadAddress 혹은 streetAddress 옵션이 주소의 타입에 맞게 존재
      [`${toCamelCase(addressType, 'address')}`]: `${address} ${location}`,
      addressType,
    } as UnrefinedTreeRegistApiBody;

    const serverExpectBodyData = convertApiBody(unrefinedBody);
    const body = removeFalsyValues(serverExpectBodyData) as TreeRegistAPIBody;
    regist(body);
  };

  return (
    <>
      <Topbar.Icon type="candy" />
      <S.Main>
        <FormProvider {...methods}>
          <S.Form onSubmit={handleSubmit(registTree)}>
            <S.FormTitle>트리 위치</S.FormTitle>
            <S.FormSection>
              <TreeLocation location={location} address={address} addressType={addressType} />
              <DetailAddressInput />
            </S.FormSection>
            <S.FormTitle>트리 정보</S.FormTitle>
            <S.FormSection>
              <TreeNameInput />
              <ExhibitionDateCalendar />
              <SpaceTypeSelect />
              <BusinessDaysSelect />
              <PetAllowSelect />
              <ExtraInput />
              <Button type="submit">트리 등록하기</Button>
            </S.FormSection>
          </S.Form>
        </FormProvider>
      </S.Main>
      <Navbar />
    </>
  );
}

const convertApiBody = (apiBody: UnrefinedTreeRegistApiBody): TreeRegistAPIBody => {
  const convertedBody: ServerExpectedFormData = {};

  if (apiBody.businessDays && apiBody.businessDays.length) {
    convertedBody.businessDays = formatBusineessDays(apiBody.businessDays);
  }

  if (apiBody.exhibitionStartDate && apiBody.exhibitionEndDate) {
    const { startDate, endDate } = formatExhibitionDates(
      apiBody.exhibitionStartDate,
      apiBody.exhibitionEndDate,
    );

    convertedBody.exhibitionStartDate = startDate;
    convertedBody.exhibitionEndDate = endDate;
  }

  if (apiBody.isPet) {
    convertedBody.isPet = !!apiBody.isPet;
  }

  if (apiBody.spaceType) {
    convertedBody.spaceType = !!apiBody.spaceType;
  }

  // TODO: BE에서 spaceType을 불리언으로 처리하는 로직이 fix되면 아래 구문 지워주세요.
  delete apiBody.spaceType;
  delete convertedBody.spaceType;

  const convertResult = { ...apiBody, ...convertedBody };

  return removeFalsyValues(convertResult) as TreeRegistAPIBody;
};

const formatBusineessDays = (dates: TreeRegistFormDatas['businessDays']) => dates?.join(',');

const formatExhibitionDates = (startDate: Date, endDate: Date) => ({
  startDate: formatDate(startDate, '-'),
  endDate: formatDate(endDate, '-'),
});

const validateAddress = (addressData: Partial<TAddress>): TAddress => {
  if (!addressData || isEmptyObject(addressData)) {
    throw new Error('올바르지 않은 접근입니다.');
  }

  const isUpperCase = (str: string) => str.toUpperCase() === str;

  const { address, addressType, latLng, location } = addressData;

  if (!address || !addressType || !latLng || typeof location === 'undefined') {
    throw new Error(`올바른 주소 데이터를 전달해주세요.`);
  }

  if (!isUpperCase(addressType)) {
    throw new Error('주소의 타입(addressType)은 영대문자로 전달해주세요.');
  }

  return { address, addressType, latLng, location };
};

const removeFalsyValues = <T extends object>(obj: T): Pick<T, NonFalsy<T>> => {
  const filteredEntries = Object.entries(obj).filter(([, value]) =>
    Array.isArray(value) ? value.length : Boolean(value),
  );

  return Object.fromEntries(filteredEntries) as Pick<T, NonFalsy<T>>;
};

export default TreeRegiDetail;

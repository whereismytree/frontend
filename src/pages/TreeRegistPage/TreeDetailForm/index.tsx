import { useLocation, useNavigate } from 'react-router-dom';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import Button from 'components/common/button';
import isEmptyObject from 'utils/isEmptyObject';
import formatDate from 'utils/dateUtils/formatDate';
import toCamelCase from 'utils/stringUtils/toCamelCase';
import getPath from 'utils/getPath';
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
  TAddress,
  TreeRegistFormDatas,
  ServerExpectedFormData,
  NonFalsy,
} from './types';
import * as S from './style';

function TreeRegiDetail() {
  const navigate = useNavigate();
  const methods = useForm({ mode: 'onSubmit' });
  const { handleSubmit } = methods;
  const { state } = useLocation();
  const addressData = validateAddress(state);
  const { regist } = useRegistTree();
  const { address, addressType, buildingName, latLng } = addressData;

  const registTree = (data: FieldValues) => {
    const unrefinedBody = {
      ...data,
      ...latLng,
      // roadAddress 혹은 streetAddress 옵션이 주소의 타입에 맞게 존재
      [`${toCamelCase(addressType, 'address')}`]: `${address} ${buildingName}`.trim(),
      addressType,
    } as UnrefinedTreeRegistApiBody;
    const serverExpectBodyData = convertApiBody(unrefinedBody);
    const body = removeFalsyValues(serverExpectBodyData);

    regist(body, {
      onSuccess: () => {
        navigate(getPath('myPage', 'registedTrees'));
      },
    });
  };

  return (
    <>
      <Topbar.Icon type="candy" />
      <S.Main>
        <FormProvider {...methods}>
          <S.Form onSubmit={handleSubmit(registTree)}>
            <S.FormTitle>트리 위치</S.FormTitle>
            <S.FormSection>
              <TreeLocation location={buildingName} address={address} addressType={addressType} />
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

const convertApiBody = (apiBody: UnrefinedTreeRegistApiBody) => {
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

  const convertResult = { ...apiBody, ...convertedBody };

  return removeFalsyValues(convertResult);
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

  const { address, addressType, latLng, buildingName } = addressData;

  if (!address || !addressType || !latLng || typeof buildingName === 'undefined') {
    throw new Error(`올바른 주소 데이터를 전달해주세요.`);
  }

  if (!isUpperCase(addressType)) {
    throw new Error('주소의 타입(addressType)은 영대문자로 전달해주세요.');
  }

  return { address, addressType, latLng, buildingName };
};

const removeFalsyValues = <T extends object>(obj: T): Pick<T, NonFalsy<T>> => {
  const filteredEntries = Object.entries(obj).filter(([, value]) =>
    Array.isArray(value) ? value.length : Boolean(value),
  );

  return Object.fromEntries(filteredEntries) as Pick<T, NonFalsy<T>>;
};

export default TreeRegiDetail;

import Item from 'components/common/Item';
import { AddressType } from 'components/TreeRegi/Location/Search/Result/style';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import { useFormContext } from 'react-hook-form';
import TextInput from '../common/TextInput';
import * as CommonS from '../common/style';
import * as S from './style';

function LocationDetailForm() {
  const { register } = useFormContext();
  const { address, addressType } = useSelector((state: TRootState) => state.location);
  const { road, street, buildingName } = address;
  const locationDetailRules = {
    required: false,
    maxLength: {
      value: 10,
      message: '최대 10글자 입력 가능합니다.',
    },
  };

  return (
    <>
      <CommonS.FormTitle>트리 위치</CommonS.FormTitle>
      <S.LocationFormSection>
        <Item gap={0.7}>
          <Item.Title size={1.6} weight={500}>
            {buildingName ?? ''}
          </Item.Title>
          <CommonS.LocationText>
            <AddressType>{addressType === 'ROAD' && road ? '도로명' : '지번'}</AddressType>
            {addressType === 'ROAD' ? road ?? street : street}
          </CommonS.LocationText>
        </Item>
        <TextInput
          placeholder="상세 주소 입력 (선택)"
          name="detailAddress"
          options={locationDetailRules}
          register={register}
        />
      </S.LocationFormSection>
    </>
  );
}

export default LocationDetailForm;

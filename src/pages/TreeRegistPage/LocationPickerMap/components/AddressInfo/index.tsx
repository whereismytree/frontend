import { useState } from 'react';
import latLng from 'types/latLng';
import { useNavigate } from 'react-router-dom';
import useAddressFromCoords from 'hooks/useAddressFromCoords';
import ADDRESS_TYPES from 'constants/addressTypes';
import Button from 'components/common/button';
import getPath from 'utils/getPath';
import * as S from './style';

function AddressInfo({ latLng }: { latLng: latLng }) {
  const navigate = useNavigate();
  const [addressDataKey, setAddressDataKey] = useState<keyof typeof addressDatas>('address');
  const { lat, lng } = latLng;
  const addressDatas = useAddressFromCoords(lat, lng);

  const addressType = addressDataKey === 'address' ? 'STREET' : 'ROAD';
  const anotherAddressType = addressDataKey === 'address' ? 'ROAD' : 'STREET';
  const korAddressType = ADDRESS_TYPES[addressType].ko;
  const address = `${addressDatas[addressDataKey]?.address_name} ${
    addressDatas.roadAddress?.building_name || ''
  }`;

  const changeAddressDataKey = () => {
    setAddressDataKey((prev) => (prev === 'address' ? 'roadAddress' : 'address'));
  };

  const handleRegist = () => {
    navigate(getPath('treePage', 'regist', 'detail'), {
      state: {
        latLng,
        address: addressDatas[addressDataKey]?.address_name,
        addressType: addressDataKey === 'address' ? 'STREET' : 'ROAD',
        buildingName: addressDatas.roadAddress?.building_name || '',
      },
    });
  };

  return (
    <S.AddressInfo>
      <S.Address>
        {addressDatas[addressDataKey]?.address_name
          ? address
          : `${korAddressType}이 존재하지 않습니다.`}
      </S.Address>
      <S.AddressTypeButton onClick={changeAddressDataKey}>
        {ADDRESS_TYPES[anotherAddressType].ko}으로 보기
      </S.AddressTypeButton>
      <Button onClick={handleRegist} disabled={!addressDatas[addressDataKey]}>
        이 위치로 트리 등록하기
      </Button>
    </S.AddressInfo>
  );
}

export default AddressInfo;

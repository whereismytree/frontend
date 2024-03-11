import { useState } from 'react';
import latLng from 'types/latLng';
import { useNavigate } from 'react-router-dom';
import useAddressFromCoords from 'hooks/useAddressFromCoords';
import Button from 'components/common/button';
import getPath from 'utils/getPath';
import * as S from './style';

function AddressInfo({ latLng }: { latLng: latLng }) {
  const navigate = useNavigate();
  const { lat, lng } = latLng;
  const addressDatas = useAddressFromCoords(lat, lng);
  const [addressType, setAddressType] = useState<keyof typeof addressDatas>('address');
  const anotherAddressType = addressType === 'address' ? 'roadAddress' : 'address';
  const korAddressType = korAddressTypes[addressType];
  const address = `${addressDatas[addressType]?.address_name} ${
    addressDatas.roadAddress?.building_name || ''
  }`;

  const changeAddressType = () => {
    setAddressType((prev) => (prev === 'address' ? 'roadAddress' : 'address'));
  };

  const handleRegist = () => {
    navigate(getPath('treePage', 'regist', 'detail'), {
      state: {
        latLng,
        address: addressDatas[addressType]?.address_name,
        addressType: addressType === 'address' ? 'STREET' : 'ROAD',
        buildingName: addressDatas.roadAddress?.building_name || null,
      },
    });
  };

  return (
    <S.AddressInfo>
      <S.Address>
        {addressDatas[addressType]?.address_name
          ? address
          : `${korAddressType}이 존재하지 않습니다.`}
      </S.Address>
      <S.AddressTypeButton onClick={changeAddressType}>
        {korAddressTypes[anotherAddressType]}으로 보기
      </S.AddressTypeButton>
      <Button onClick={handleRegist} disabled={!addressDatas[addressType]}>
        이 위치로 트리 등록하기
      </Button>
    </S.AddressInfo>
  );
}

const korAddressTypes = {
  address: '지번',
  roadAddress: '도로명',
};

export default AddressInfo;

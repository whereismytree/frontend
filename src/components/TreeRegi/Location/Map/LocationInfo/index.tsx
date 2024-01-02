import Item from 'components/common/Item';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import * as S from './style';

function LocationInfo({ children }: { children: ReactNode }) {
  const location = useSelector((state: TRootState) => state.location);
  const { addressType, address } = location;
  const { road: roadAddress, street: streetAddress } = address;

  return (
    <S.LocationInfo>
      <Item.Title size={2}>
        {addressType === 'ROAD' ? roadAddress || '도로명 주소가 존재하지 않습니다.' : streetAddress}
      </Item.Title>
      {children}
    </S.LocationInfo>
  );
}

export default LocationInfo;

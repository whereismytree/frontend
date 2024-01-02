import MyLocationButton from 'components/common/MyLocationButton';
import Button from 'components/common/button';
import Item from 'components/common/Item';
import { ReactElement, ReactNode, useEffect, useRef } from 'react';
import useLocationMap from 'hooks/useLocationMap';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'store';
import {
  setAddressType,
  setLatitude,
  setLongitude,
  setRoadAddress,
  setStreetAddress,
} from 'store/modules/treeRegistLocationSlice';
import * as S from './style';

function TreeRegistMap({ children }: { children: ReactElement }) {
  const mapContainer = useRef(null);
  const { map, roadAddress, address } = useLocationMap(mapContainer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRoadAddress(roadAddress));
    dispatch(setStreetAddress(address));

    if (map) {
      const center = map.getCenter();
      dispatch(setLatitude(center.getLat()));
      dispatch(setLongitude(center.getLng()));
    }
  }, [map, dispatch, roadAddress, address]);

  return (
    <S.MapContainer ref={mapContainer}>
      <MyLocationButton map={map} />
      {children}
    </S.MapContainer>
  );
}

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

function LocationTypeChangeButton() {
  const dispatch = useDispatch();
  const { addressType } = useSelector((state: TRootState) => state.location);

  const changeAddressType = () => {
    const updateAddressType = addressType === 'ROAD' ? 'STREET' : 'ROAD';
    dispatch(setAddressType(updateAddressType));
  };

  return (
    <S.LocationTypeButton type="button" onClick={() => changeAddressType()}>
      {addressType === 'ROAD' ? '지번' : '도로명'}으로 보기
    </S.LocationTypeButton>
  );
}

function RegistButton() {
  return <Button>이 위치로 트리 등록하기</Button>;
}

TreeRegistMap.LocationInfo = LocationInfo;
TreeRegistMap.RegistButton = RegistButton;
TreeRegistMap.LocationTypeButton = LocationTypeChangeButton;

export default TreeRegistMap;

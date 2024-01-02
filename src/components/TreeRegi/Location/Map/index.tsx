import MyLocationButton from 'components/common/MyLocationButton';
import { ReactElement, useEffect, useRef } from 'react';
import useLocationMap from 'hooks/useLocationMap';
import { useDispatch } from 'react-redux';
import {
  setLatitude,
  setLongitude,
  setRoadAddress,
  setStreetAddress,
} from 'store/modules/treeRegistLocationSlice';
import * as S from './style';
import LocationInfo from './LocationInfo';
import RegistButton from './RegistButton';
import LocationTypeButton from './LocationTypeButton';

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

TreeRegistMap.LocationInfo = LocationInfo;
TreeRegistMap.RegistButton = RegistButton;
TreeRegistMap.LocationTypeButton = LocationTypeButton;

export default TreeRegistMap;

import MyLocationButton from 'components/common/MyLocationButton';
import { ReactElement, useEffect, useRef } from 'react';
import useLocationMap from 'hooks/useLocationMap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLatitude,
  setLongitude,
  setRoadAddress,
  setStreetAddress,
} from 'store/modules/treeRegistLocationSlice';
import { TRootState } from 'store';
import * as S from './style';
import LocationInfo from './LocationInfo';
import RegistButton from './RegistButton';
import LocationTypeButton from './LocationTypeButton';

function TreeRegistMap({ children }: { children: ReactElement }) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map, roadAddress, address } = useLocationMap(mapContainer);
  const { longitude, latitude } = useSelector((state: TRootState) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    if (map && longitude && latitude) {
      const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);

      map.setCenter(moveLatLon);
    }
  }, [map]);

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

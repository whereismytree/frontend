import MyLocationButton from 'components/common/MyLocationButton';
import { useEffect, useRef } from 'react';
import useLocationMap from 'hooks/useLocationMap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBuildingName,
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

function TreeRegistMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map, roadAddress, address, buildingName } = useLocationMap(mapContainer);
  const { longitude, latitude } = useSelector((state: TRootState) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    if (map) {
      // 지도를 마우스 휠로 확대/축소 제한
      map.setZoomable(false);

      if (longitude && latitude) {
        const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);
        // 미리 설정된 좌표가 있을 시 지도의 중심을 좌표로 이동
        map.setCenter(moveLatLon);
      }
    }
  }, [map]);

  useEffect(() => {
    dispatch(setRoadAddress(roadAddress));
    dispatch(setStreetAddress(address));
    dispatch(setBuildingName(buildingName));

    if (map) {
      const center = map.getCenter();

      dispatch(setLatitude(center.getLat()));
      dispatch(setLongitude(center.getLng()));
    }
  }, [map, dispatch, roadAddress, address]);

  return (
    <S.MapContainer ref={mapContainer}>
      <S.Overlay>지도를 움직여 트리를 심어주세요</S.Overlay>
      <MyLocationButton map={map} />
    </S.MapContainer>
  );
}

TreeRegistMap.LocationInfo = LocationInfo;
TreeRegistMap.RegistButton = RegistButton;
TreeRegistMap.LocationTypeButton = LocationTypeButton;

export default TreeRegistMap;

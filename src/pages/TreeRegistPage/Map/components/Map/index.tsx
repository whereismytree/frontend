import React, { useCallback, useEffect, useRef } from 'react';
import MyLocationButton from 'components/common/MyLocationButton';
import useKakaoMapWithAddress from 'hooks/useKakaoMapWithAddress';
import { useTreeRegistMapContext } from '../../provider';
import * as S from './style';

function TreeLocation({ initialLatLng }: { initialLatLng: { lat: number; lng: number } }) {
  const mapContainer = useRef(null);
  const { map, address } = useKakaoMapWithAddress(mapContainer);
  const { road: roadAddress, street: streetAddress, location } = address;
  const { setAddress } = useTreeRegistMapContext();

  // latLng가 바뀌면, address, location update
  useEffect(() => {
    if (map) {
      const center = map.getCenter();

      const address = {
        latLng: {
          lat: center.getLat(),
          lng: center.getLng(),
        },
        street: streetAddress,
        road: roadAddress || '',
        location: location || '',
      };

      setAddress(address);
    }
  }, [map, roadAddress, streetAddress, location, setAddress]);

  const prohibitMapZoom = useCallback(() => {
    map.setZoomable(false);
  }, [map]);

  const moveToLatlng = useCallback(
    (moveLatLng: typeof initialLatLng) => {
      const { lat, lng } = moveLatLng;
      const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
      map.setCenter(moveLatLon);
    },
    [map],
  );

  useEffect(() => {
    const isEmpty = (object: object) => Object.keys(object).length === 0;

    if (map) {
      prohibitMapZoom();

      if (!isEmpty(initialLatLng)) {
        moveToLatlng(initialLatLng);
      }
    }
  }, [map, initialLatLng, moveToLatlng, prohibitMapZoom]);

  return (
    <S.MapContainer ref={mapContainer}>
      <S.Overlay>지도를 움직여 트리를 심어주세요</S.Overlay>
      <MyLocationButton map={map} />
    </S.MapContainer>
  );
}

export default React.memo(TreeLocation);

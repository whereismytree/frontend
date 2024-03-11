import React, { useRef, useState } from 'react';
import MyLocationButton from 'components/common/MyLocationButton';
import useKakaoMap from 'hooks/useKakaoMap';
import latLng from 'types/latLng';
import * as S from './style';

function LocationPickerMap({
  initialLatLng,
  children,
}: {
  initialLatLng: latLng;
  children: (latLng: latLng) => JSX.Element;
}) {
  const mapContainer = useRef(null);
  const [latLng, setLatLng] = useState(initialLatLng);
  const { map } = useKakaoMap(mapContainer, (map) => {
    map.setZoomable(false);

    const moveMapCenterToLatlng = () => {
      const { lat, lng } = latLng;
      const moveLatLon = new window.kakao.maps.LatLng(lat, lng);
      map.setCenter(moveLatLon);
    };

    const updateLatLng = () => {
      window.kakao.maps.event.addListener(map, 'idle', () => {
        const mapCenter = map.getCenter();
        setLatLng({ lat: mapCenter.getLat(), lng: mapCenter.getLng() });
      });
    };

    moveMapCenterToLatlng();
    updateLatLng();
  });

  return (
    <>
      <S.MapContainer ref={mapContainer}>
        <S.Overlay>
          <S.ToolTip>지도를 움직여 트리를 심어주세요</S.ToolTip>
        </S.Overlay>
        <MyLocationButton map={map} />
      </S.MapContainer>
      {children(latLng)}
    </>
  );
}

export default LocationPickerMap;

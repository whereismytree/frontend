import { RefObject, useCallback, useEffect } from 'react';
import useKakaoMap from './useKakaoMap';

export type TreePostionItem = { name: string; latlng: { getLat(): number; getLng(): number } };

type MarkerOptions = {
  positions: TreePostionItem[];
  initialMapLevel: number;
  markerImageSrc: string;
  imageSize: [number, number];
};

type UseMarkerMap = (mapContainer: RefObject<HTMLDivElement>, markerOptions: MarkerOptions) => any;

const useMarkerMap: UseMarkerMap = (mapContainer, markerOptions): { map: any } => {
  const { map } = useKakaoMap(mapContainer);
  const { positions, imageSize, markerImageSrc, initialMapLevel } = markerOptions;

  const setMarkers = useCallback(
    (width: number, height: number) => {
      positions.forEach((position) => {
        const imageSize = new window.kakao.maps.Size(width, height);
        const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, imageSize);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const marker = new window.kakao.maps.Marker({
          map,
          position: position.latlng,
          title: position.name,
          image: markerImage,
        });
      });
    },
    [map, markerImageSrc, positions],
  );

  useEffect(() => {
    window.kakao.maps.load(() => {
      if (map && positions && positions.length) {
        const latLng = positions[0].latlng;
        map.setCenter(new window.kakao.maps.LatLng(latLng.getLat(), latLng.getLng()));
        setMarkers(...imageSize);
      }
    });
  }, [map, initialMapLevel, positions, imageSize, setMarkers]);

  return { map };
};

export default useMarkerMap;

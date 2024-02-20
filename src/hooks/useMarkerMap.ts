import { RefObject } from 'react';
import useKakaoMap from './useKakaoMap';

type treePostionItem = { name: string; latlng: { lat(): number; lng(): number } };

type UseMarkerMap = ({
  mapContainer,
  markerImageSrc,
  positions,
  imageSize,
}: {
  mapContainer: RefObject<HTMLDivElement>;
  markerImageSrc: string;
  positions: treePostionItem[];
  imageSize: [number, number];
}) => any;

const useMarkerMap: UseMarkerMap = ({ mapContainer, markerImageSrc, positions, imageSize }) => {
  const { map } = useKakaoMap(mapContainer);

  window.kakao.maps.load(() => {
    if (map) {
      map.setCenter(new window.kakao.maps.LatLng(37.54, 126.978));
      map.setLevel(6);
    }
  });

  if (positions && positions.length) {
    positions.forEach((position) => {
      const imgSize = new window.kakao.maps.Size(...imageSize);
      const markerImage = new window.kakao.maps.MarkerImage(markerImageSrc, imgSize);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const marker = new window.kakao.maps.Marker({
        position: position.latlng,
        map,
        title: position.name,
        image: markerImage,
      });
    });
  }

  return { map };
};

export default useMarkerMap;

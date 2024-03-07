import { RefObject, useCallback, useEffect, useState } from 'react';
import { ITreeListItem } from 'types/TreeListApiResponse';
import formatTreeListToPostions from 'utils/formatTreeListToPostions';
import useKakaoMap from './useKakaoMap';

type TreePostionItem = { name: string; latlng: { getLat: () => number; getLng: () => number } };

type MarkerOptions = {
  trees: ITreeListItem[];
  markerImageSrc: string;
  imageSize: [number, number];
};

type UseMarkerMap = (mapContainer: RefObject<HTMLDivElement>, markerOptions: MarkerOptions) => any;

const useMarkerMap: UseMarkerMap = (mapContainer, markerOptions): { map: any } => {
  const { map } = useKakaoMap(mapContainer);
  const { trees, imageSize, markerImageSrc } = markerOptions;
  const [positions, setPositions] = useState<TreePostionItem[]>([]);

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
    if (map && trees) {
      const positions = formatTreeListToPostions(trees);
      setPositions(positions);
    }
  }, [map, trees]);

  useEffect(() => {
    window.kakao.maps.load(() => {
      if (map && positions && positions.length) {
        const { latlng } = positions[0];
        map.setCenter(latlng);
        setMarkers(...imageSize);
      }
    });
  }, [map, positions, imageSize, setMarkers]);

  return { map };
};

export default useMarkerMap;

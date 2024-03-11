import { RefObject, useCallback, useEffect, useState } from 'react';
import ITreeListApiResponse, { ITreeListItem } from 'types/TreeListApiResponse';
import useKakaoMap from './useKakaoMap';

const useMarkerMap: UseMarkerMap = (mapContainer, markerOptions): { map: any } => {
  const { trees, imageSize, markerImageSrc } = markerOptions;
  const [positions, setPositions] = useState<TreePostionItem[]>([]);
  const { map } = useKakaoMap(mapContainer);

  useEffect(() => {
    if (trees.length) {
      const positions = formatTreeListToPostions(trees);
      setPositions(positions);
    }
  }, [trees]);

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
    if (map && positions && positions.length) {
      const { latlng } = positions[0];
      map.setCenter(latlng);
      setMarkers(...imageSize);
    }
  }, [map, positions, imageSize, setMarkers]);

  return { map };
};

type TreePostionItem = { name: string; latlng: { getLat: () => number; getLng: () => number } };

type MarkerOptions = {
  trees: ITreeListItem[];
  markerImageSrc: string;
  imageSize: [number, number];
};

type UseMarkerMap = (mapContainer: RefObject<HTMLDivElement>, markerOptions: MarkerOptions) => any;

type Positions = {
  name: string;
  latlng: any;
}[];

const formatTreeListToPostions = (treeList: ITreeListApiResponse['trees']): Positions => {
  return treeList.map(({ name, lat, lng }) => ({
    name,
    latlng: new window.kakao.maps.LatLng(lat, lng),
  }));
};

export default useMarkerMap;

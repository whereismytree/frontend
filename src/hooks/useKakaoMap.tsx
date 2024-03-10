import { RefObject, useEffect, useState } from 'react';

const { kakao } = window;

const useKakaoMap = (mapContainer: RefObject<HTMLDivElement>, callback?: (map: any) => void) => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (!(kakao && kakao.maps) || !mapContainer.current) return;

    kakao.maps.load(() => {
      const newMap = new kakao.maps.Map(mapContainer.current, {
        center: new kakao.maps.LatLng(37.566535, 126.9779692), // 서울특별시청 위경도입니다.
        level: 6,
      });

      if (callback) callback(newMap);

      setMap(newMap);
    });
  }, [mapContainer]);

  return { map };
};

export default useKakaoMap;

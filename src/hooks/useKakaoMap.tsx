import { useRef, useEffect, useState } from 'react';
import { TLocation, getMyLocation } from 'utils/getMyLocation';

const useKakaoMap = () => {
  const container = useRef<any>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const loadMap = async () => {
      if (window.kakao && window.kakao.maps) {
        await new Promise<void>((resolve) => {
          window.kakao.maps.load(async () => {
            let center;
            if (navigator.geolocation) {
              try {
                const { latitude, longitude }: TLocation = await getMyLocation();
                center = new window.kakao.maps.LatLng(latitude, longitude);
              } catch (error) {
                console.error(error);
              }
            } else {
              center = new window.kakao.maps.LatLng(37.5647224, 126.9816533);
            }

            const options = { center, level: 3 };
            const map = new window.kakao.maps.Map(container.current, options);
            setMap(map);

            resolve();
          });
        });
      }
    };
    loadMap();
  }, []);

  return { map, container };
};

export default useKakaoMap;

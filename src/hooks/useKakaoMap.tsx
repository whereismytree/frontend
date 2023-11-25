import { useRef, useEffect } from 'react';
import { TLocation, getMyLocation } from 'utils/getMyLocation';

const useKakaoMap = () => {
  const container = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      if (window.kakao && window.kakao.maps) {
        await new Promise<void>((resolve) => {
          window.kakao.maps.load(async () => {
            let center;
            if (navigator.geolocation) {
              try {
                const location: TLocation = await getMyLocation();
                center = new window.kakao.maps.LatLng(location.latitude, location.longitude);
              } catch (error) {
                console.error(error);
              }
            } else {
              center = new window.kakao.maps.LatLng(37.5647224, 126.9816533);
            }

            const options = { center, level: 3 };
            new window.kakao.maps.Map(container.current, options);

            resolve();
          });
        });
      }
    };
    loadMap();
  }, [container]);

  return { container };
};

export default useKakaoMap;

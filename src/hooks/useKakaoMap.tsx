import { RefObject, useEffect, useState } from 'react';
import { ILocation, getMyLocation } from 'utils/getMyLocation';

type TPosition = number | undefined;

const useKakaoMap = (
  mapContainer: RefObject<HTMLDivElement>,
  latLng?: { lat: TPosition; lng: TPosition },
) => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const loadMap = async () => {
      window.kakao.maps.load(async () => {
        let center;
        if (navigator.geolocation) {
          try {
            const { latitude, longitude }: ILocation = await getMyLocation();
            center = new window.kakao.maps.LatLng(latitude, longitude);
          } catch (error) {
            console.error(error);
          }
        } else {
          center = new window.kakao.maps.LatLng(37.5647224, 126.9816533);
        }

        const options = { center, level: 3 };
        if (mapContainer.current) {
          const map = new window.kakao.maps.Map(mapContainer.current, options);
          setMap(map);
        }
      });
    };

    if (window.kakao && window.kakao.maps) {
      loadMap();
    }
  }, []);

  useEffect(() => {
    if (map && latLng?.lat && latLng?.lng) {
      const center = new window.kakao.maps.LatLng(latLng.lat, latLng.lng);
      map.setCenter(center);
    }
  }, [map, latLng?.lat, latLng?.lng]);

  return { map };
};

export default useKakaoMap;

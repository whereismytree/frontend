import { RefObject, useCallback, useEffect, useState } from 'react';
import useKakaoMap from './useKakaoMap';

interface IAddressData {
  address_name: string;
  building_name?: string;
}

export const getMapCenterAddress = (
  map: any,
): Promise<{ roadAddress: IAddressData | null; address: IAddressData }> => {
  return new Promise((resolve, reject) => {
    const geocoder = new window.kakao.maps.services.Geocoder();
    const center = map.getCenter();

    geocoder.coord2Address(
      center.getLng(),
      center.getLat(),
      ([result]: [{ road_address: IAddressData | null; address: IAddressData }], status: any) => {
        if (status === window.kakao.maps.services.Status.OK && result) {
          const { road_address: roadAddress, address } = result;
          resolve({ roadAddress, address });
        } else {
          reject(new Error('지도 중심을 기반으로 주소를 받아오는데 실패했습니다'));
        }
      },
    );
  });
};

const useKakaoMapWithAddress = (
  mapContainer: RefObject<HTMLDivElement>,
): {
  map: any;
  address: { road: string | null; street: string; location?: string };
} => {
  const { map } = useKakaoMap(mapContainer);
  const [roadAddressName, setRoadAddressName] = useState<string | null>(null);
  const [streetAddressName, setStreetAddressName] = useState<string>('');
  const [location, setLocation] = useState<string | undefined>('');

  const updateAddress = useCallback(async () => {
    const { roadAddress, address } = await getMapCenterAddress(map);
    const { building_name: changeLocation } = roadAddress || {};
    setLocation(changeLocation && String(changeLocation));
    setStreetAddressName(extractAddressName(address));
    setRoadAddressName(roadAddress ? extractAddressName(roadAddress) : null);
  }, [map]);

  useEffect(() => {
    if (map) {
      (async () => {
        await updateAddress();
      })();

      window.kakao.maps.event.addListener(map, 'idle', async () => {
        await updateAddress();
      });
    }
  }, [map, updateAddress]);

  const extractAddressName = (addressData: IAddressData) => {
    const { address_name: addressName } = addressData;

    return `${addressName}`.trim();
  };

  return {
    map,
    address: { road: roadAddressName, street: streetAddressName, location },
  };
};

export default useKakaoMapWithAddress;

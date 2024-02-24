import { RefObject, useEffect, useState } from 'react';
import useKakaoMap from './useKakaoMap';

interface IAddressData {
  address_name: string;
  building_name?: string;
}

const useLocationMap = (
  mapContainer: RefObject<HTMLDivElement>,
): {
  map: any;
  address: { road: string | null; street: string; location?: string };
} => {
  const { map } = useKakaoMap(mapContainer);
  const [roadAddressName, setRoadAddressName] = useState<string | null>(null);
  const [streetAddressName, setStreetAddressName] = useState<string>('');
  const [location, setLocation] = useState<string | undefined>('');

  const convertAddressToString = (addressData: IAddressData) => {
    const { address_name: addressName } = addressData;

    return `${addressName}`.trim();
  };

  const getMapCenterAddress = (
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
            reject(new Error('주소를 받아오는데 실패했습니다'));
          }
        },
      );
    });
  };

  useEffect(() => {
    const applyAddressName = (address: IAddressData, roadAddress: IAddressData | null) => {
      setStreetAddressName(convertAddressToString(address));
      setRoadAddressName(roadAddress ? convertAddressToString(roadAddress) : null);
    };

    if (map) {
      (async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        const { building_name: changeLocation } = roadAddress || {};
        setLocation(changeLocation && String(changeLocation));
        applyAddressName(address, roadAddress);
      })();

      window.kakao.maps.event.addListener(map, 'idle', async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        const { building_name: changeLocation } = roadAddress || {};
        setLocation(changeLocation && String(changeLocation));
        applyAddressName(address, roadAddress);
      });
    }
  }, [map]);

  return {
    map,
    address: { road: roadAddressName, street: streetAddressName, location },
  };
};

export default useLocationMap;

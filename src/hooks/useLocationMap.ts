import { RefObject, useEffect, useState } from 'react';
import useKakaoMap from './useKakaoMap';

interface IAddressData {
  address_name: string;
  building_name?: string;
}

const useLocationMap = (
  mapContainer: RefObject<HTMLDivElement>,
): { map: any; roadAddress: string | null; address: string } => {
  const { map } = useKakaoMap(mapContainer);
  const [roadAddressName, setRoadAddressName] = useState<string | null>(null);
  const [streetAddressName, setStreetAddressName] = useState<string>('');

  const convertAddressToString = (addressData: IAddressData) => {
    const { address_name: addressName, building_name: bulidngName } = addressData;

    return `${addressName} ${bulidngName || ''}`.trim();
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
    const applyAddressName = async (address: IAddressData, roadAddress: IAddressData | null) => {
      setStreetAddressName(convertAddressToString(address));
      setRoadAddressName(roadAddress ? convertAddressToString(roadAddress) : null);
    };

    if (map) {
      (async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        await applyAddressName(address, roadAddress);
      })();

      window.kakao.maps.event.addListener(map, 'idle', async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        await applyAddressName(address, roadAddress);
      });
    }
  }, [map]);

  return { map, roadAddress: roadAddressName, address: streetAddressName };
};

export default useLocationMap;

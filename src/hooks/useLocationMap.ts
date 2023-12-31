import { RefObject, useEffect, useState } from 'react';
import useKakaoMap from './useKakaoMap';

interface IAddressData {
  address_name: string;
  building_name?: string;
}

const useLocationMap = (
  mapContainer: RefObject<HTMLDivElement>,
): { map: any; roadAddress: string; address: string } => {
  const { map } = useKakaoMap(mapContainer);
  const [roadAddressName, setRoadAddressName] = useState<string>('');
  const [addressName, setAddressName] = useState<string>('');

  const convertAddressToString = (addressData: IAddressData | null) => {
    const { address_name: addressName, building_name: bulidngName } = addressData ?? {};

    return `${addressName} ${bulidngName || ''}`.trim();
  };

  const getMapCenterAddress = (
    map: any,
  ): Promise<{ roadAddress: IAddressData | null; address: IAddressData | null }> => {
    return new Promise((resolve, reject) => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const center = map.getCenter();

      geocoder.coord2Address(
        center.getLng(),
        center.getLat(),
        ([result]: [{ road_address: IAddressData; address: IAddressData }], status: any) => {
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

  const applyAddressName = async (
    address: IAddressData | null,
    roadAddress: IAddressData | null,
  ) => {
    setAddressName(convertAddressToString(address));
    setRoadAddressName(convertAddressToString(roadAddress));
  };

  useEffect(() => {
    if (map) {
      window.kakao.maps.load(async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        await applyAddressName(address, roadAddress);
      });

      window.kakao.maps.event.addListener(map, 'idle', async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        await applyAddressName(address, roadAddress);
      });
    }
  }, [map]);

  return { map, roadAddress: roadAddressName, address: addressName };
};

export default useLocationMap;

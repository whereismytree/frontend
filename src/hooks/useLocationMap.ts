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

  const convertAddressToString = (addressData: IAddressData, buildingName: string | undefined) => {
    const { address_name: addressName } = addressData;

    return `${addressName} ${buildingName || ''}`.trim();
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
    const applyAddressName = async (
      address: IAddressData,
      roadAddress: IAddressData | null,
      buildingName: string | undefined,
    ) => {
      setStreetAddressName(convertAddressToString(address, buildingName));
      setRoadAddressName(roadAddress ? convertAddressToString(roadAddress, buildingName) : null);
    };

    if (map) {
      (async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        const { building_name: buildingName } = roadAddress ?? {};
        await applyAddressName(address, roadAddress, buildingName);
      })();

      window.kakao.maps.event.addListener(map, 'idle', async () => {
        const { roadAddress, address } = await getMapCenterAddress(map);
        const { building_name: buildingName } = roadAddress ?? {};
        await applyAddressName(address, roadAddress, buildingName);
      });
    }
  }, [map]);

  return { map, roadAddress: roadAddressName, address: streetAddressName };
};

export default useLocationMap;

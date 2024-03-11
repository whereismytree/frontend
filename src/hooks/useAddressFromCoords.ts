import { useEffect, useState } from 'react';

const useAddressFromCoords = (lat: number, lng: number) => {
  const [address, setAddress] = useState<IAddressData | null>(null);
  const [roadAddress, setRoadAddress] = useState<IAddressData | null>(null);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.coord2Address(
        lng,
        lat,
        ([result]: [{ road_address: IAddressData | null; address: IAddressData }], status: any) => {
          if (status === window.kakao.maps.services.Status.OK && result) {
            const { road_address: roadAddress, address } = result;
            setAddress(address);
            setRoadAddress(roadAddress);
          } else {
            throw new Error('주소를 받아오기 위해 위도 경도를 전달해주세요!');
          }
        },
      );
    });
  }, [lat, lng]);

  return { address, roadAddress };
};

interface IAddressData {
  address_name: string;
  building_name?: string;
}

export default useAddressFromCoords;

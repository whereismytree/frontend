import myLocationButton from 'assets/my-location-icon.svg';
import { ILocation, getMyLocation } from 'utils/getMyLocation';
import * as S from './style';

export const MyLocationButton = ({ map }: { map: any }) => {
  const onClickMyLocation = async () => {
    try {
      const { latitude, longitude }: ILocation = await getMyLocation();
      const locPosition = new window.kakao.maps.LatLng(latitude, longitude);

      // 현재 중심 좌표와 현재 위치가 동일하면 이동하지 않음
      const center = map.getCenter();
      if (center.getLat() === latitude && center.getLng() === longitude) {
        return;
      }

      map.setCenter(locPosition);
    } catch (error) {
      // console.error(error);
    }
  };

  return <S.MyLocationButton src={myLocationButton} alt="현재 위치" onClick={onClickMyLocation} />;
};

export default MyLocationButton;

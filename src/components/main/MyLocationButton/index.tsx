import * as S from './style';
import myLocationButton from 'assets/my-location-icon.svg';
import { TLocation, getMyLocation } from 'utils/getMyLocation';

export const MyLocationButton = ({ map }: { map: any }) => {
  const onClickMyLocation = async () => {
    try {
      const { latitude, longitude }: TLocation = await getMyLocation();
      const locPosition = new window.kakao.maps.LatLng(latitude, longitude);

      // 현재 중심 좌표와 현재 위치가 동일하면 이동하지 않음
      const center = map.getCenter();
      if (center.getLat() === latitude && center.getLng() === longitude) {
        return;
      }

      map.setCenter(locPosition);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.MyLocationButton
        src={myLocationButton}
        alt="현재 위치"
        onClick={onClickMyLocation}
      />
    </>
  );
};

export default MyLocationButton;

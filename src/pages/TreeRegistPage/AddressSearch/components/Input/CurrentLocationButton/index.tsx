import { useEffect, useState } from 'react';
import getPath from 'utils/getPath';
import { ILocation, getMyLocation } from 'utils/getMyLocation';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

function CurrentLocationButton() {
  const [userLocation, setUserLocation] = useState<ILocation>();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setUserLocation(await getMyLocation());
    })();
  }, []);

  const handleLocationButtonClick = () => {
    const state = {
      lat: userLocation?.latitude,
      lng: userLocation?.longitude,
    };

    navigate(getPath('treePage', 'regist', 'map'), { state });
  };

  return (
    <S.LocationButton onClick={handleLocationButtonClick} disabled={!userLocation}>
      <p>현재 위치로 설정</p>
      <S.Arrow />
    </S.LocationButton>
  );
}
export default CurrentLocationButton;

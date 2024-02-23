import getPath from 'utils/getPath';
import * as S from './style';

function CurrentLocationButton() {
  return (
    <S.LocationButton to={getPath('treePage', 'regist', 'map')} state={{ lat: 0, lng: 0 }}>
      <p>현재 위치로 설정</p>
      <S.Arrow />
    </S.LocationButton>
  );
}
export default CurrentLocationButton;

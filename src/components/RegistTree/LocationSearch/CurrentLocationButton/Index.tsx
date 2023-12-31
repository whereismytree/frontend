import * as S from './style';

function CurrentLocationButton() {
  return (
    <S.LocationButton>
      <p>현재 위치로 설정</p>
      <S.Arrow />
    </S.LocationButton>
  );
}
export default CurrentLocationButton;

import { useDispatch } from 'react-redux';
import { setLatitude, setLongitude } from 'store/modules/treeRegistLocationSlice';
import * as S from './style';

function CurrentLocationButton() {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setLatitude(0));
    dispatch(setLongitude(0));
  };

  return (
    <S.LocationButton to="../map" onClick={onClick}>
      <p>현재 위치로 설정</p>
      <S.Arrow />
    </S.LocationButton>
  );
}
export default CurrentLocationButton;

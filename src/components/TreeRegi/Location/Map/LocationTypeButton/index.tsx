import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'store';
import { setAddressType } from 'store/modules/treeRegistLocationSlice';
import * as S from './style';

function LocationTypeButton() {
  const dispatch = useDispatch();
  const { addressType } = useSelector((state: TRootState) => state.location);

  const changeAddressType = () => {
    const updateAddressType = addressType === 'ROAD' ? 'STREET' : 'ROAD';
    dispatch(setAddressType(updateAddressType));
  };

  return (
    <S.LocationTypeButton type="button" onClick={() => changeAddressType()}>
      {addressType === 'ROAD' ? '지번' : '도로명'}으로 보기
    </S.LocationTypeButton>
  );
}

export default LocationTypeButton;

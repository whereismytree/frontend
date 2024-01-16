import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { TRootState } from 'store';
import { setAddressType } from 'store/modules/treeRegistLocationSlice';
import * as S from './style';

function LocationTypeButton() {
  const dispatch = useDispatch();
  const { addressType } = useSelector((state: TRootState) => state.location);
  const [korAdd, setKorAdd] = useState('');

  useEffect(() => {
    setKorAdd(addressType === 'ROAD' ? '지번' : '도로명');
  }, [addressType]);

  const changeAddressType = useCallback(() => {
    const updateAddressType = addressType === 'ROAD' ? 'STREET' : 'ROAD';
    dispatch(setAddressType(updateAddressType));
  }, [addressType]);

  return (
    <S.LocationTypeButton type="button" onClick={() => changeAddressType()}>
      {korAdd}으로 보기
    </S.LocationTypeButton>
  );
}

export default LocationTypeButton;

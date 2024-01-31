import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'store';
import { setSnackBarView } from 'store/modules/toggleSlice';
import * as S from './style';

function SnackBar({ during, children }: { during: number; children: string }) {
  const { view } = useSelector((state: TRootState) => state.toggle.snackBar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (view) {
      setTimeout(() => {
        dispatch(setSnackBarView(false));
      }, during);
    }
  }, [view, during, dispatch]);

  return <S.SnackBar $view={view}>{children}</S.SnackBar>;
}

export default SnackBar;

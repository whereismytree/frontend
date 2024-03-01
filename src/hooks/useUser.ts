import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'store';
import { setAccessToken } from 'store/modules/userInfoSlice';

const useUser = () => {
  const { accessToken } = useSelector((state: TRootState) => state.user);
  const dispatch = useDispatch();

  const login = (accessToken: string) => {
    dispatch(setAccessToken(accessToken));
  };

  const logout = () => {
    dispatch(setAccessToken(''));
  };

  const isLogin = !!accessToken;

  return { token: accessToken, login, logout, isLogin };
};

export default useUser;

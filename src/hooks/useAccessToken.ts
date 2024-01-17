import { useSelector } from 'react-redux';
import { TRootState } from 'store';

type TUseAccessToken = () => string;

const useAccessToken: TUseAccessToken = () => {
  const { accessToken } = useSelector((state: TRootState) => state.user);

  return accessToken;
};

export default useAccessToken;

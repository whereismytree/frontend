import useApiQuery from 'hooks/useApiQuery';
import { HTTPError } from 'error/HTTPError';
import IUserData from './types';

const useProfile = () => {
  const { data, isError, isLoading } = useApiQuery<IUserData>('v1/my');

  // TODO: HTTPError로 바꿔주세요.
  if (isError) {
    throw new HTTPError('리뷰를 불러오는 데 오류가 발생했습니다.');
  }

  if (!data && !isLoading) {
    throw new HTTPError('불러온 사용자의 프로필 데이터가 존재하지 않습니다.');
  }

  return data;
};

export default useProfile;

import useApiQuery from 'hooks/useApiQuery';
import IUserData from './types';

const useProfile = () => {
  const { data, isError, isLoading } = useApiQuery<IUserData>('v1/my');

  // TODO: HTTPError로 바꿔주세요.
  if (isError) {
    throw new Error('리뷰를 불러오는 데 오류가 발생했습니다.');
  }

  if (!data && !isLoading) {
    throw new Error('데이터가 없습니다!');
  }

  return data;
};

export default useProfile;

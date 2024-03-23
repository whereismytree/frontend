import useApiQuery from 'hooks/useApiQuery';
import { HTTPError } from 'error/HTTPError';
import IUserData from './types';

export const useProfile = () => {
  const { data, isError, isLoading } = useApiQuery<IUserData>('v1/my');

  if (!data && !isLoading && isError) {
    throw new HTTPError('내 정보를 불러오는 데 오류가 발생했습니다.');
  }

  return data;
};

import ITreeListApiResponse from 'types/TreeListApiResponse';
import useApiQuery from './useApiQuery';

const useRegistedTree = () => {
  const { data, isError, isLoading } = useApiQuery<ITreeListApiResponse>('v1/my/trees/posted');

  if (isError) {
    // TODO: HTTPError로 에러를 던지게 해야합니다.
  }

  if (!isLoading && !data) {
    // TODO: HTTPError로 에러를 던지게 해야합니다.
  }

  const trees = data?.trees || [];

  return trees;
};

export default useRegistedTree;

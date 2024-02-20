import ITreeListApiResponse from 'types/TreeListApiResponse';
import { HTTPError } from 'error/HTTPError';
import useApiQuery from 'hooks/useApiQuery';

const useRegistedTree = () => {
  const { data, isError } = useApiQuery<ITreeListApiResponse>('v1/my/trees/posted');

  if (isError) {
    throw new HTTPError('내가 등록한 트리를 불러오던 중 오류가 발생했습니다.');
  }

  const trees = data?.trees || [];

  return trees;
};

export default useRegistedTree;

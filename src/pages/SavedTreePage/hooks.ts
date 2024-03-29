import { HTTPError } from 'error/HTTPError';
import useApiQuery from 'hooks/useApiQuery';
import ITreeListApiResponse from 'types/TreeListApiResponse';

function useSavedTrees() {
  const { data, isError, isLoading } = useApiQuery<ITreeListApiResponse>('v1/my/trees/saved');

  if (isError) {
    throw new HTTPError('저장한 트리를 불러오는 데 오류가 발생했습니다.');
  }

  if (!data && !isLoading) {
    throw new HTTPError('저장한 트리 데이터가 없습니다!');
  }

  return data?.trees || [];
}

export default useSavedTrees;

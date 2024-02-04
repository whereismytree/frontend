import useApiQuery from 'hooks/useApiQuery';
import ITreeListApiResponse from 'types/TreeListApiResponse';

function useSavedTrees() {
  const { data, isError, isLoading } = useApiQuery<ITreeListApiResponse>('v1/my/trees/saved');
  // TODO: HTTPError로 바꿔주세요.
  if (isError) {
    throw new Error('저장한 트리를 불러오는 데 오류가 발생했습니다.');
  }

  if (!data && !isLoading) {
    throw new Error('저장한 트리 데이터가 없습니다!');
  }

  return data;
}

export default useSavedTrees;

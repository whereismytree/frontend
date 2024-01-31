import { HTTPError } from 'error/HTTPError';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from './useApiQuery';

export const useTreeData = (treeId: string) => {
  const { data, isError, isLoading, error } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  if (isError) {
    throw new HTTPError(`트리를 불러오는 데 오류가 발생했습니다. ${error}`);
  }

  if (!isLoading && !data) {
    throw new Error(`트리 데이터를 받아오는 API 응답값이 올바르지 않습니다. ${data}`);
  }

  return data;
};

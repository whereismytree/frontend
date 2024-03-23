import { HTTPError } from 'error/HTTPError';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from './useApiQuery';

export const useTreeData = (treeId: string) => {
  const { data, isError, isLoading } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  if (!isLoading && isError) {
    throw new HTTPError(`트리를 불러오는 데 오류가 발생했습니다.`);
  }

  return data;
};

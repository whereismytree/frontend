import { ITreeItem } from 'types/apiResponse';
import { HttpError } from 'types/ErrorTypes';
import useApiQuery from './useApiQuery';

export const useTreeData = (treeId: string) => {
  const { data, isError } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  if (isError) throw new HttpError('트리를 불러오는 데 오류가 발생했습니다.');
  if (!data) throw new Error(`트리 데이터를 받아오는 API 응답값이 올바르지 않습니다. ${data}`);

  return data;
};

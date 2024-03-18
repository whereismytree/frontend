import useApiMutation from 'hooks/useApiMutation';
import { HTTPError } from 'error/HTTPError';
import { TreeRegistAPIBody } from './types';

export const useRegistTree = () => {
  const { mutate } = useApiMutation<TreeRegistAPIBody>('v1/trees', 'POST', {
    onError: () => {
      throw new HTTPError('트리를 등록하던 도중 오류가 발생했습니다.');
    },
  });

  return { regist: mutate };
};

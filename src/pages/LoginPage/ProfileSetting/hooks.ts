import { HTTPError } from 'error/HTTPError';
import useApiMutation from 'hooks/useApiMutation';
import { ICreateProfileAPIBody } from './types';

export const useProfile = () => {
  const { mutate: createProfile, isError } = useApiMutation<ICreateProfileAPIBody>(
    'v1/my/profile',
    'POST',
  );

  if (isError) {
    throw new HTTPError('프로필을 생성하던 중 오류가 발생했습니다.');
  }

  return { create: createProfile };
};

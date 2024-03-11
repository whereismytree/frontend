import { HTTPError } from 'error/HTTPError';
import useApiMutation from 'hooks/useApiMutation';
import { IUserProfileAPIRequestBody } from './types';

export const useCreateProfile = () => {
  const { mutate: createProfile, isError } = useApiMutation<IUserProfileAPIRequestBody>(
    'v1/my/profile',
    'POST',
  );

  if (isError) {
    throw new HTTPError('프로필을 생성하던 중 오류가 발생했습니다.');
  }

  return createProfile;
};

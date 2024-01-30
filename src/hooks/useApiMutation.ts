import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { HTTPError } from 'error/HTTPError';

const useApiMutation = <TData = unknown, TVariables = unknown>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE',
  options?: UseMutationOptions<TData, unknown, TVariables, unknown>,
): UseMutationResult<TData, unknown, TVariables, unknown> => {
  // TODO: 실제 서비스 배포시에는 아래 액세스 토큰을 가져오는 코드로 사용해야 합니다.
  // const accessToken = useAccessToken();
  const accessToken: string | undefined = process.env.REACT_APP_TREE_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error('사용자의 액세스 토큰을 찾을 수 없습니다.');
  }

  const mutationFn = async (variables: TVariables): Promise<TData> => {
    try {
      const response: AxiosResponse<TData> = await axios({
        url: `${process.env.REACT_APP_TREE_API_URL}${url}`,
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        data: variables,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new HTTPError('axios 통신 중 오류가 발생했습니다.', error.response.status);
      }

      throw error;
    }
  };

  return useMutation<TData, unknown, TVariables, unknown>({ mutationFn, ...options });
};

export default useApiMutation;

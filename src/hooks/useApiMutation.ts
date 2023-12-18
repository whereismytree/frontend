import { UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

const useApiMutation = <TData = unknown, TVariables = unknown>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE',
  options?: UseMutationOptions<TData, unknown, TVariables, unknown>,
): UseMutationResult<TData, unknown, TVariables, unknown> => {
  // TODO: line 10 - 14 / Redux에서 유저 정보와 관련된 상태에 접근해 accessToken 할당 : Custom Hook으로 분리
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

      const isSuccess = response.status >= 200 && response.status < 300;

      if (!isSuccess) {
        throw new Error(
          `ajax 통신 중 오류가 발생했습니다. 에러코드: ${response.status}\n${response.statusText}`,
        );
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          `ajax 통신 중 오류가 발생했습니다. status: ${error.response.status}, ${error.response.statusText}`,
        );
      }

      throw error;
    }
  };

  return useMutation<TData, unknown, TVariables, unknown>({ mutationFn, ...options });
};

export default useApiMutation;

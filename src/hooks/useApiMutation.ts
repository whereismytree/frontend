import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { HTTPError } from 'error/HTTPError';
import { useToken } from './useUser';

const useApiMutation = <TData = unknown, TVariables = unknown>(
  url: string,
  method: 'POST' | 'PUT' | 'DELETE',
  options?: UseMutationOptions<TData, Error, TVariables, unknown>,
) => {
  const token = useToken();

  const mutationFn = async (variables: TVariables): Promise<TData> => {
    try {
      const response: AxiosResponse<TData> = await axios({
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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

  return useMutation({ mutationFn, ...options });
};

export default useApiMutation;

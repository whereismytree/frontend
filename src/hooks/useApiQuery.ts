import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { HTTPError } from 'error/HTTPError';
import useUser from './useUser';

const useApiQuery = <TData = unknown>(
  queryParam: string,
  enabled?: boolean,
): UseQueryResult<TData, unknown> => {
  const { token } = useUser();

  if (!token) {
    throw new Error('사용자의 액세스 토큰을 찾을 수 없습니다.');
  }

  const fetchData = async () => {
    try {
      const response: AxiosResponse<TData> = await axios.get(
        `${process.env.REACT_APP_TREE_API_URL}${queryParam}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new HTTPError('axios 통신 중 오류가 발생했습니다.', error.response.status);
      }

      throw error;
    }
  };

  return useQuery<TData, Error>({
    queryKey: [queryParam],
    queryFn: fetchData,
    enabled: enabled !== undefined ? enabled : true,
  });
};

export default useApiQuery;

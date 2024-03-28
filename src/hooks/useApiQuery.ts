import { useNavigate } from 'react-router-dom';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';
import { HTTPError } from 'error/HTTPError';
import getPath from 'utils/getPath';
import { useToken } from './useUser';

const useApiQuery = <TData = unknown>(
  queryParam: string,
  enabled?: boolean,
): UseQueryResult<TData, Error> => {
  const token = useToken();
  const navigate = useNavigate();

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
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        navigate(getPath('sessionExpired'));
      }

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

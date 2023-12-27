import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

const useApiQuery = <TData = unknown>(queryParam: string): UseQueryResult<TData, unknown> => {
  // TODO: line 5 - 10 / Redux에서 유저 정보와 관련된 상태에 접근해 accessToken 할당 : Custom Hook으로 분리
  const accessToken: string | undefined = process.env.REACT_APP_TREE_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error('사용자의 액세스 토큰을 찾을 수 없습니다.');
  }

  const fetchData = async () => {
    try {
      const response: AxiosResponse<TData> = await axios.get(
        `${process.env.REACT_APP_TREE_API_URL}${queryParam}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

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
          `ajax 통신 중 오류가 발생했습니다. 에러코드: ${error.response.status}\n${error.response.statusText}`,
        );
      }

      throw error;
    }
  };

  return useQuery<TData, Error>({
    queryKey: [queryParam],
    queryFn: fetchData,
  });
};

export default useApiQuery;

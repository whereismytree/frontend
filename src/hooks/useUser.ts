import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { HTTPError } from 'error/HTTPError';
import useApiQuery from './useApiQuery';

const localStorageTokenKey = 'token';

const deleteUser = async (token: string) => {
  const res = await axios({
    url: `${process.env.REACT_APP_TREE_API_URL}v1/my`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

const useWithraw = (token: string) => {
  const { mutate } = useMutation({ mutationFn: deleteUser });

  const withraw = () => {
    try {
      if (token) mutate(token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new HTTPError('회원 탈퇴 중 오류가 발생했습니다.', error.response.status);
      }

      throw error;
    }
  };

  return withraw;
};

export const useToken = () => sessionStorage.getItem(localStorageTokenKey);

const useUser = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { isLoading, isError } = useApiQuery('v1/my');
  const token = useToken();

  useEffect(() => {
    if (isLoading) return;

    if (!isError) {
      setIsLogin(true);
    }

    if (isError) {
      // if (token) {
      //   throw new HTTPError('로그인 정보가 만료되었습니다.', 401);
      // }

      setIsLogin(false);
    }
  }, [isLoading, isError]);

  const withraw = useWithraw(token ?? '');

  const login = (accessToken: string) => {
    sessionStorage.setItem(localStorageTokenKey, accessToken);
    setIsLogin(true);
  };

  const logout = () => {
    sessionStorage.removeItem(localStorageTokenKey);
    setIsLogin(false);
  };

  return { login, logout, isLogin, withraw };
};

export default useUser;

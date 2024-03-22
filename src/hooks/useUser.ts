import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
      mutate(token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new HTTPError('회원 탈퇴 중 오류가 발생했습니다.', error.response.status);
      }

      throw error;
    }
  };

  return withraw;
};

export const useToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(sessionStorage.getItem(localStorageTokenKey) || '');
  });

  return token;
};

const useTokenExpired = () => {
  const queryClient = useQueryClient();
  const { isLoading, data } = useApiQuery('v1/my');
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    if (data) {
      setIsExpired(false);
    } else {
      setIsExpired(true);
    }
  }, [data]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['v1/my'] });
  }, []);

  return isExpired;
};

const useUser = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = useToken();
  const isTokenExpired = useTokenExpired();
  const withraw = useWithraw(token ?? '');

  useEffect(() => {
    setIsLogin(Boolean(token));
  });

  useEffect(() => {
    return () => {
      if (token && isTokenExpired) {
        throw new HTTPError('로그인 정보가 만료되었습니다.', 401);
      }
    };
  }, [isTokenExpired]);

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

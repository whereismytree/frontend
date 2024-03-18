import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { HTTPError } from 'error/HTTPError';

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

const useUser = () => {
  const localStorageKey = 'token';
  const token = sessionStorage.getItem(localStorageKey);
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

  const login = (accessToken: string) => {
    sessionStorage.setItem(localStorageKey, accessToken);
  };

  const logout = () => {
    sessionStorage.removeItem(localStorageKey);
  };

  return { token, login, logout, isLogin: !!token, withraw };
};

export default useUser;

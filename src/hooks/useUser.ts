const useUser = () => {
  const localStorageKey = 'token';
  const token = sessionStorage.getItem(localStorageKey);

  const login = (accessToken: string) => {
    sessionStorage.setItem(localStorageKey, accessToken);
  };

  const logout = () => {
    sessionStorage.removeItem(localStorageKey);
  };

  return { token, login, logout, isLogin: !!token };
};

export default useUser;

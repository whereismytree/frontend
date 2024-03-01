import useUser from 'hooks/useUser';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';

function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useUser();
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get('accessToken');
  const nicknameRequire = JSON.parse(queryParams.get('isNicknameRequired')!);

  useEffect(() => {
    if (accessToken) {
      login(accessToken);
    } else {
      throw new Error('로그인 중 알 수 없는 에러가 발생했습니다.');
    }

    if (nicknameRequire) {
      navigate(`../${getPath('loginPage', 'profileSetting')}`);
    } else {
      navigate(`../${getPath('mainPage', 'root')}`);
    }
  }, []);

  return null;
}

export default Redirect;

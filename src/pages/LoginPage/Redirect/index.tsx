import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAccessToken } from 'store/modules/userInfoSlice';
import getPath from 'utils/getPath';

function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get('accessToken');
  const nicknameRequire = queryParams.get('isNicknameRequired');

  useEffect(() => {
    if (accessToken) {
      dispath(setAccessToken(accessToken));
    }

    if (nicknameRequire) {
      navigate(`../${getPath('loginPage', 'profileSetting')}`);
    } else {
      navigate(`../${getPath('mainPage', 'root')}`);
    }
  }, []);

  return <div />;
}

export default Redirect;

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
  const accessToken = queryParams.get('accessToken') ?? '';
  const nicknameReq = queryParams.get('isNicknameRequired');

  useEffect(() => {
    dispath(setAccessToken(accessToken));

    if (JSON.parse(nicknameReq ?? '')) {
      navigate(getPath('loginPage', 'profileSetting'));
    } else {
      navigate('');
    }
  }, []);

  return null;
}
export default Redirect;

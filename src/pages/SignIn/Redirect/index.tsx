import PATH from 'constants/path';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAccessToken } from 'store/modules/userInfoSlice';

function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispath = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const accessToken = queryParams.get('accessToken') ?? '';
  const nicknameReq = queryParams.get('isNicknameRequired');

  useEffect(() => {
    dispath(setAccessToken(accessToken));

    if (nicknameReq) {
      navigate('../login/setting');
    } else {
      navigate(PATH.mainPage);
    }
  }, []);

  return <div />;
}
export default Redirect;

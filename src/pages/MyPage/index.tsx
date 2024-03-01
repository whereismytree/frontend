import { useNavigate } from 'react-router-dom';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
import OptionList from 'pages/MyPage/components/OptionList';
import useUser from 'hooks/useUser';
import getPath from 'utils/getPath';
import UserInfoSection from 'pages/MyPage/components/UserInfo';
import useProfile from './hooks';
import * as S from './style';

export const MyPage = () => {
  const userData = useProfile();
  const { logout } = useUser();
  const navigate = useNavigate();

  const logoutWithRedirect = () => {
    const answer = window.confirm('로그아웃 하시겠습니까?');

    if (answer) {
      logout();
      navigate(getPath('loginPage', 'root'));
    }
  };

  if (!userData) {
    return null;
  }

  return (
    <>
      <Topbar.Icon type="cookie" />
      <S.MyPage>
        <UserInfoSection {...userData} />
        <OptionList>
          <OptionList.Option>문의하기 / 신고하기</OptionList.Option>
          <OptionList.Option>이용약관</OptionList.Option>
          <OptionList.Option>개인정보처리방침</OptionList.Option>
          <OptionList.DangerOption onClick={logoutWithRedirect}>로그아웃</OptionList.DangerOption>
          <OptionList.DangerOption>탈퇴하기</OptionList.DangerOption>
        </OptionList>
      </S.MyPage>
      <Navbar />
    </>
  );
};

import { useNavigate } from 'react-router-dom';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
import OptionList from 'pages/MyPage/components/OptionList';
import useUser from 'hooks/useUser';
import getPath from 'utils/getPath';
import UserInfoSection from 'pages/MyPage/components/UserInfo';
import useModal from 'hooks/useModal';
import { useProfile } from './hooks';
import * as S from './style';
import LogoutModal from './components/Modals/LogoutModal';
import WithrawModal from './components/Modals/WithrawModal';

export const MyPage = () => {
  const userData = useProfile();
  const { logout, withraw } = useUser();
  const navigate = useNavigate();
  const withrawModal = useModal();
  const logoutModal = useModal();

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
          <OptionList.DangerOption onClick={logoutModal.open}>로그아웃</OptionList.DangerOption>
          <OptionList.DangerOption onClick={withrawModal.open}>탈퇴하기</OptionList.DangerOption>
        </OptionList>
      </S.MyPage>
      <Navbar />

      <LogoutModal
        ref={logoutModal.ref}
        onSubmit={() => {
          logout();
          logoutModal.close();
          navigate(getPath('landingPage'));
        }}
        onCancel={logoutModal.close}
      />
      <WithrawModal
        ref={withrawModal.ref}
        onSubmit={() => {
          withraw();
          withrawModal.close();
          navigate(getPath('landingPage'));
        }}
        onCancel={withrawModal.close}
      />
    </>
  );
};

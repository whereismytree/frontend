import { useNavigate } from 'react-router-dom';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
import OptionList from 'pages/MyPage/components/OptionList';
import useUser from 'hooks/useUser';
import getPath from 'utils/getPath';
import UserInfoSection from 'pages/MyPage/components/UserInfo';
import Button, { WhiteButton } from 'components/common/button';
import useModal from 'hooks/useModal';
import Modal from 'components/common/Modal';
import { useProfile } from './hooks';
import * as S from './style';

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

      <Modal
        ref={logoutModal.ref}
        title="로그아웃하시겠습니까?"
        footer={
          <S.ButtonsWrapper>
            <WhiteButton.Small onClick={logoutModal.close}>취소</WhiteButton.Small>
            <Button.Small
              onClick={() => {
                logout();
                logoutModal.close();
                navigate(getPath('loginPage', 'root'));
              }}
            >
              로그아웃
            </Button.Small>
          </S.ButtonsWrapper>
        }
      />

      <Modal
        ref={withrawModal.ref}
        title="탈퇴하시겠습니까?"
        content={
          <>
            탈퇴한 이후 <S.redText>재가입이 불가</S.redText>합니다.
          </>
        }
        footer={
          <S.ButtonsWrapper>
            <WhiteButton.Small onClick={withrawModal.close}>취소</WhiteButton.Small>
            <Button.Small
              onClick={() => {
                withraw();
                navigate(getPath('landingPage'));
              }}
            >
              탈퇴할게요
            </Button.Small>
          </S.ButtonsWrapper>
        }
      />
    </>
  );
};

import React from 'react';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
import OptionList from 'components/MyPage/OptionList';
import UserInfoSection from 'components/MyPage/UserInfo';
import useProfile from './hooks';
import * as S from './style';

export const MyPage = () => {
  const userData = useProfile();

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
          <OptionList.DangerOption>로그아웃</OptionList.DangerOption>
          <OptionList.DangerOption>탈퇴하기</OptionList.DangerOption>
        </OptionList>
      </S.MyPage>
      <Navbar />
    </>
  );
};

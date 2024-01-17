import React from 'react';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
import UserInfoSection from './UserInfo';
import OptionListSection from './OptionList';
import * as S from './style';

export const MyPage = () => {
  return (
    <>
      <Topbar.Icon type="cookie" />
      <S.MyPage>
        <UserInfoSection />
        <OptionListSection />
      </S.MyPage>
      <Navbar />
    </>
  );
};

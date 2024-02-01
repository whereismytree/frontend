import React from 'react';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
// import PATH from 'constants/path';
// import UserInfo from 'components/MyPage/UserInfo';
import TPlatform from 'types/platform';
import useApiQuery from 'hooks/useApiQuery';
import OptionList from 'components/MyPage/OptionList';
import UserInfoSection from './UserInfo';
import * as S from './style';

export interface IUserData {
  nickname: string;
  email: string;
  platform: TPlatform;
  profileImageUrl: '';
  postedTreesCount: number;
  savedTreesCount: number;
  reviewsCount: number;
}

const useProfile = () => {
  const { data, isError, isLoading } = useApiQuery<IUserData>('v1/my');

  // TODO: HTTPError로 바꿔주세요.
  if (isError) {
    throw new Error('리뷰를 불러오는 데 오류가 발생했습니다.');
  }

  if (!data && !isLoading) {
    throw new Error('데이터가 없습니다!');
  }

  return data;
};

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

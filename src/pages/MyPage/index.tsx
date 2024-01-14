import React from 'react';
import UserInfo from 'components/MyPage/UserInfo';
import PATH from 'constants/path';
import OptionList from 'components/MyPage/OptionList';
import useApiQuery from 'hooks/useApiQuery';
import TPlatform from 'types/platform';

interface IUserData {
  nickname: string;
  email: string;
  platform: TPlatform;
  profileImageUrl: '';
  postedTreesCount: number;
  savedTreesCount: number;
  reviewsCount: number;
}

export const MyPage = () => {
  const { data } = useApiQuery<IUserData>('v1/my');

  const {
    nickname = '',
    email = '',
    platform = 'GOOGLE',
    profileImageUrl = '',
    postedTreesCount = 0,
    savedTreesCount = 0,
    reviewsCount = 0,
  } = data ?? {};

  return (
    <>
      <UserInfo>
        <UserInfo.Profile src={profileImageUrl} />
        <UserInfo.Name>{nickname}</UserInfo.Name>
        <UserInfo.Login platform={platform}>{email}</UserInfo.Login>
        <UserInfo.Activities>
          <UserInfo.Activity to={`../${PATH.registInfoPage}`} count={postedTreesCount}>
            등록한 트리
          </UserInfo.Activity>
          <UserInfo.Activity to={`../${PATH.saveTreePage}`} count={savedTreesCount}>
            저장한 트리
          </UserInfo.Activity>
          <UserInfo.Activity to={`../${PATH.reviewPage}`} count={reviewsCount}>
            내가 쓴 후기
          </UserInfo.Activity>
        </UserInfo.Activities>
      </UserInfo>
      <OptionList>
        <OptionList.Option>문의하기 / 신고하기</OptionList.Option>
        <OptionList.Option>이용약관</OptionList.Option>
        <OptionList.Option>개인정보처리방침</OptionList.Option>
        <OptionList.DangerOption>로그아웃</OptionList.DangerOption>
        <OptionList.DangerOption>탈퇴하기</OptionList.DangerOption>
      </OptionList>
    </>
  );
};

import ProfileImage from 'components/common/ProfileImage';
import PATH from 'constants/path';
import IUserData from 'pages/MyPage/types';
import * as S from './style';

function UserInfoSection({
  profileImageUrl,
  nickname,
  platform,
  email,
  postedTreesCount,
  savedTreesCount,
  reviewsCount,
}: IUserData) {
  return (
    <S.Wrapper>
      <ProfileImage src={profileImageUrl} />
      <S.Name>{nickname}</S.Name>
      <S.LoginInfo $platform={platform}>{email}</S.LoginInfo>
      <S.ActivitiesWrapper>
        <S.Activity to={`.${PATH.registInfoPage}`}>
          <p>{postedTreesCount}</p>
          <p>등록한 트리</p>
        </S.Activity>
        <S.Activity to={`${PATH.saveTreePage}`}>
          <p>{savedTreesCount}</p>
          <p> 저장한 트리</p>
        </S.Activity>
        <S.Activity to={`${PATH.reviewPage}`}>
          <p>{reviewsCount}</p>
          <p>내가 쓴 후기</p>
        </S.Activity>
      </S.ActivitiesWrapper>
    </S.Wrapper>
  );
}

export default UserInfoSection;

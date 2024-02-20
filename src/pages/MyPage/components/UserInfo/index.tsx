import ProfileImage from 'components/common/ProfileImage';
import getPath from 'utils/getPath';
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
        <S.Activity to={`.${getPath('myPage', 'registedTrees')}`}>
          <p>{postedTreesCount}</p>
          <p>등록한 트리</p>
        </S.Activity>
        <S.Activity to={`${getPath('myPage', 'savedTrees')}`}>
          <p>{savedTreesCount}</p>
          <p> 저장한 트리</p>
        </S.Activity>
        <S.Activity to={`${getPath('myPage', 'registedReviews')}`}>
          <p>{reviewsCount}</p>
          <p>내가 쓴 후기</p>
        </S.Activity>
      </S.ActivitiesWrapper>
    </S.Wrapper>
  );
}

export default UserInfoSection;

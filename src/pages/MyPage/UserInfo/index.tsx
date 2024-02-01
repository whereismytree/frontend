import UserInfo from 'components/MyPage/UserInfo';
import PATH from 'constants/path';
import { IUserData } from '..';

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
    <UserInfo>
      <UserInfo.Profile src={profileImageUrl} />
      <UserInfo.Name>{nickname}</UserInfo.Name>
      <UserInfo.Login platform={platform}>{email}</UserInfo.Login>
      <UserInfo.Activities>
        <UserInfo.Activity to={`.${PATH.registInfoPage}`} count={postedTreesCount}>
          등록한 트리
        </UserInfo.Activity>
        <UserInfo.Activity to={`${PATH.saveTreePage}`} count={savedTreesCount}>
          저장한 트리
        </UserInfo.Activity>
        <UserInfo.Activity to={`${PATH.reviewPage}`} count={reviewsCount}>
          내가 쓴 후기
        </UserInfo.Activity>
      </UserInfo.Activities>
    </UserInfo>
  );
}

export default UserInfoSection;

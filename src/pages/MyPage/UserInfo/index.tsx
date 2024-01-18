import UserInfo from 'components/MyPage/UserInfo';
import PATH from 'constants/path';
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

function UserInfoSection() {
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

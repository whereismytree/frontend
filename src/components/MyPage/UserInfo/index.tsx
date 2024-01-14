import { ReactElement, ReactNode } from 'react';
import ProfileImage from 'components/common/ProfileImage';
import TPlatform from 'types/platform';
import * as S from './style';

interface IUserActivity {
  children: string;
  count: number;
  to: string;
}

function UserInfo({ children }: { children: ReactNode }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

function UserName({ children }: { children: string }) {
  return <S.Name>{children}</S.Name>;
}

function LoginInfo({ children, platform }: { children: string; platform: TPlatform }) {
  return <S.LoginInfo platform={platform}>{children}</S.LoginInfo>;
}

function UserActivities({ children }: { children: ReactElement<IUserActivity>[] }) {
  return <S.ActivitiesWrapper>{children}</S.ActivitiesWrapper>;
}

function UserActivity({ children, count, to }: IUserActivity) {
  return (
    <S.Activity to={to}>
      <p>{count}</p>
      <p>{children}</p>
    </S.Activity>
  );
}

UserInfo.Profile = ProfileImage;
UserInfo.Name = UserName;
UserInfo.Login = LoginInfo;
UserInfo.Activities = UserActivities;
UserInfo.Activity = UserActivity;

export default UserInfo;

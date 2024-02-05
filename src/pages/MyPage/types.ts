import TPlatform from 'types/platform';

export interface IUserData {
  nickname: string;
  email: string;
  platform: TPlatform;
  profileImageUrl: '';
  postedTreesCount: number;
  savedTreesCount: number;
  reviewsCount: number;
}

export default IUserData;

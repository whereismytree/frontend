import defaultImage from 'assets/random_profile_1.png';
import { ImageWrapper, ProfileImg } from './style';

const profileImageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  e.currentTarget.src = defaultImage;
};

function ProfileImage({ src, size }: { src: string; size?: 'sm' }) {
  return (
    <ImageWrapper size={size}>
      <ProfileImg src={src} onError={(e) => profileImageErrorHandler(e)} />
    </ImageWrapper>
  );
}
export default ProfileImage;

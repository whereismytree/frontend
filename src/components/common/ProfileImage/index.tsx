import React from 'react';
import defaultImage from 'assets/random_profile_1.png';
import { ImageWrapper, ProfileImg } from './style';

const profileImageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  e.currentTarget.src = defaultImage;
};

function ProfileImage({
  src,
  size,
  ...rest
}: { src: string; size?: 'sm' } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <ImageWrapper size={size} {...rest}>
      <ProfileImg src={src} onError={(e) => profileImageErrorHandler(e)} />
    </ImageWrapper>
  );
}

export default ProfileImage;

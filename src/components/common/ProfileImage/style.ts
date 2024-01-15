import profileOutline from 'assets/profile-outline.svg';
import styled from 'styled-components';

export const ImageWrapper = styled.div<{ size?: 'sm' }>`
  width: ${({ size }) => (size === 'sm' ? '40px' : '110px')};
  aspect-ratio: 1/1.1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${profileOutline}) no-repeat center / cover;
    z-index: 1;
  }
`;

export const ProfileImg = styled.img`
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 53.9%;
  transform: translate(-50%, -50%);
`;

import profileOutline from 'assets/profile-outline.svg';
import bow from 'assets/bow.svg';
import styled from 'styled-components';

export const ImageWrapper = styled.div<{ size?: 'sm' }>`
  position: relative;
  width: ${({ size }) => (size === 'sm' ? '40px' : '110px')};
  aspect-ratio: 1/1;
  border-radius: 50%;

  &::after {
    content: '';
    background: url(${bow}) no-repeat center / contain;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    aspect-ratio: 1/1;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${profileOutline}) no-repeat center / contain;
    z-index: 1;
  }
`;

export const ProfileImg = styled.img`
  position: absolute;
  aspect-ratio: 1/1;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

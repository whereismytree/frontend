import styled from 'styled-components';

interface MapButtonProps {
  showTreeInfo: boolean;
  direction: 'right' | 'left';
}

export const Map = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(var(--content-height) + var(--header-height));
  position: relative;
`;

export const MapButton = styled.button<MapButtonProps>`
  z-index: 10;
  position: absolute;
  bottom: ${(props) => (props.showTreeInfo ? '24rem' : '1.6rem')};
  right: ${(props) => (props.direction === 'right' ? '1.6rem' : '')};
  left: ${(props) => (props.direction === 'left' ? '1.6rem' : '')};
`;

export const Loading = styled.section`
  height: calc(var(--content-height) + var(--header-height));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

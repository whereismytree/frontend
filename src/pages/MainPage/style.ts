import styled from 'styled-components';

export const Map = styled.section`
  height: calc(100vh - var(--navbar-height));
  > img {
    z-index: 10;
    position: absolute;
    left: 1.6rem;
    bottom: calc(1.2rem);
    /* bottom: calc(21.6rem + 1.2rem); */
    margin-bottom: 1.2rem;
  }
`;

export const Loading = styled.section`
  height: calc(100vh - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

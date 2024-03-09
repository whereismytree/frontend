import styled from 'styled-components';

export const Content = styled.main`
  height: calc(100vh - var(--header-height) - var(--navbar-height));
  overflow: hidden;

  button {
    position: absolute;
    top: -30px;
    right: 10px;
  }
`;

export const GuideWrapper = styled.main`
  height: calc(100vh - var(--header-height) - var(--navbar-height));
  display: flex;
  background-color: var(--grey-light);
  align-items: center;
`;

export const Map = styled.div`
  position: relative;
  height: 100%;
`;

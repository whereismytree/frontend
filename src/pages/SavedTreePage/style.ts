import styled from 'styled-components';

export const Content = styled.main`
  height: calc(100vh - var(--header-height) - var(--navbar-height));
  overflow: hidden;
  position: relative;

  button {
    position: absolute;
    top: -30px;
    right: 10px;
  }
`;

export const GuideWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: calc(100vh - var(--header-height) - var(--navbar-height));
  display: flex;
  background-color: var(--grey-light);
  align-items: center;
`;

export const Map = styled.div`
  position: relative;
  height: 100%;
`;

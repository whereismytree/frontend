import styled from 'styled-components';

export const Map = styled.div`
  height: calc(100vh - var(--navbar-height) - var(--header-height));
  position: relative;
`;

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  height: calc(100vh - var(--navbar-height) - var(--header-height));
  background-color: var(--grey-light);
`;

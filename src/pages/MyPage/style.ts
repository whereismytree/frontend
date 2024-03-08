import styled from 'styled-components';

export const MyPage = styled.main`
  height: calc(100vh - var(--navbar-height) - var(--header-height));
  overflow: scroll;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const redText = styled.span`
  color: red;
`;

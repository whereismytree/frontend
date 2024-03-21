import styled from 'styled-components';

export const InfoContainer = styled.main`
  overflow: scroll;
  height: calc(100vh - var(--header-height) - var(--navbar-height));
`;

export const Map = styled.div`
  width: 100%;
  height: 15rem;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem 1rem 2.4rem;
  border-bottom: 0.1rem solid var(--grey-light);
  box-sizing: border-box;
  box-shadow: 0px -4px 4px 0px #0000000d;
`;

export const ButtonContainer = styled.div`
  padding: 2.4rem;
  background-color: #fff;
  position: sticky;
  bottom: 0;
`;

import styled from 'styled-components';

export const Wrapper = styled.section`
  overflow: scroll;
  height: calc(100vh - var(--header-height) - var(--navbar-height));
`;

export const TreeInfo = styled.header`
  height: 9.2rem;
  padding: 2.4rem;
  border-bottom: 0.1rem solid var(--grey-light);
`;

export const Button = styled.div`
  padding: 2.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 42rem;
`;

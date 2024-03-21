import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  height: var(--navbar-height);
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  background-color: var(--main-white);
`;

export const Button = styled.button`
  height: 7.1rem;
`;

export const Img = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const Text = styled.p`
  margin-top: 0.6rem;
  color: var(--main-black);
  font-size: 1rem;
`;

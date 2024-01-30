import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 10;
  width: 100%;
  max-width: 42rem;
  position: absolute;
  top: 8.5rem;
  text-align: center;
`;

export const Button = styled.button`
  background-color: var(--main-green);
  width: calc(100% - 16rem);
  max-width: 23rem;
  padding: 0.8rem 3rem;
  border-radius: 5rem;
  border: 0.2rem solid white;
  color: white;
  font-size: 1.4rem;
  word-break: keep-all;
`;

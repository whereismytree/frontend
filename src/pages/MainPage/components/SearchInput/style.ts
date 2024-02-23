import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 30rem;
  color: var(--main-black);
  ::placeholder {
    color: var(--grey-medium);
    font-size: 1.4rem;
  }
`;

export const ClearSearchIcon = styled.img`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  margin-right: 2.5rem;
`;

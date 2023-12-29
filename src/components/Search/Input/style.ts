import styled from 'styled-components';

export const StyleSearchInput = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 1.4rem;
  font-weight: 400;
  border: none;
  background-color: var(--grey-light);
  border-radius: 10px;
  padding-left: 48px;
  box-sizing: border-box;

  &:focus {
    background-color: initial;
    outline: 1px solid var(--main-green);
  }
`;

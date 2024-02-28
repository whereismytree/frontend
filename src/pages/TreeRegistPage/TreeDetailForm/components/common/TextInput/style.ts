import styled from 'styled-components';

export const TextInput = styled.input`
  font-size: 1.2rem;
  font-weight: 400;
  display: block;
  border: 1px solid var(--grey-light);
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;

  &::placeholder {
    color: var(--grey-medium);
  }

  &:focus {
    border-color: var(--main-green);
  }
`;

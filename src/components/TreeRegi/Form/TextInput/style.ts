import styled from 'styled-components';

export const TextInput = styled.input`
  font-weight: 400;
  display: block;
  border: 1px solid var(--grey-light);
  width: 100%;
  padding: 0.8rem 1.2rem;

  &::placeholder {
    color: var(--grey-medium);
  }
`;

export const RequiredStar = styled.span`
  margin-left: 6px;
  color: #b5002d;
`;

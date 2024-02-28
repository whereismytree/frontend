import styled, { css } from 'styled-components';

export const TextInput = styled.input<{ $valid?: boolean; $invalid?: boolean }>`
  font-size: 1.2rem;
  font-weight: 400;
  display: block;
  width: 100%;
  padding: 0.8rem 1.2rem;
  border-radius: 5px;
  border: 1px solid
    ${({ $valid, $invalid }) => {
      if ($valid) return 'var(--main-green)';
      if ($invalid) return '#B5002D';

      return 'var(--grey-light)';
    }};

  ${({ $invalid }) =>
    !$invalid &&
    css`
      &:focus {
        border-color: var(--main-green);
      }
    `}

  &::placeholder {
    color: var(--grey-medium);
  }
`;

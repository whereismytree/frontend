import styled from 'styled-components';

export const Input = styled.input<{ $isValid: boolean; $isEmpty: boolean }>`
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 8px 14px;
  width: 100%;

  border: 1px solid
    ${({ $isValid, $isEmpty }) => {
      if ($isEmpty) return 'var(--grey-light)';
      if ($isValid) return 'var(--main-green)';
      return '#B5002D';
    }};
`;

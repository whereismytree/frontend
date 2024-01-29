import styled from 'styled-components';

export const VerticalButton = styled.button<{ isOpen?: boolean }>`
  padding: 0 10px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  line-height: 11px;
  background-color: ${({ isOpen }) => isOpen && 'var(--grey-light)'};
`;

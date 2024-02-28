import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonLabel = styled.label<{ children: string }>`
  display: inline-block;
  cursor: pointer;
  border: 1px solid var(--grey-light);
  box-sizing: border-box;
  margin: 0;
  background-color: var(--main-white);

  ${({ children }) =>
    children.length === 1
      ? css`
          width: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          aspect-ratio: 1/1;
          padding: 7px 10px;
        `
      : css`
          border-radius: 50px;
          padding: 8px 14px;
        `};
`;

export const ButtonInput = styled.input`
  display: none;

  &:checked + label {
    transition: 0.2s ease;
    background-color: var(--main-green);
    color: var(--main-white);
    box-sizing: border-box;
    border: 0;
  }
`;

import styled, { css } from 'styled-components';
import { ButtonType } from '.';

export const Button = styled.button<{ $type: ButtonType }>`
  width: 100%;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 800;
  color: var(--main-white);
  background-color: var(--main-green);
  border-radius: 10px;

  &:disabled {
    color: var(--grey-medium);
    background-color: var(--grey-light);
  }

  ${({ $type }) =>
    $type === 'cancel' &&
    css`
      color: var(--grey-medium);
      background-color: var(--main-white);
      border: 1px solid var(--grey-light);
    `}
`;

export const SmallButton = styled(Button)<{ $type: ButtonType }>`
  font-size: 1.4rem;
  font-weight: 500;
  height: 4rem;
  border-radius: 5px;
`;

export const MediumButton = styled(Button)<{ $type: ButtonType }>`
  font-size: 2rem;
  font-weight: 500;
  height: 4.4rem;
  border-radius: 5px;
`;

export const CancelButton = styled(Button)`
  &:disabled {
    color: initial;
    background-color: initial;
  }
`;

import styled, { css } from 'styled-components';

export const Button = styled.button`
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
`;

export const SmallButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: 500;
  height: 4rem;
  border-radius: 5px;
`;

export const MediumButton = styled(Button)`
  font-size: 2rem;
  font-weight: 500;
  height: 4.4rem;
  border-radius: 5px;
`;

const WhiteButtonStyle = css`
  color: var(--grey-medium);
  background-color: var(--main-white);
  border: 1px solid var(--grey-light);
`;

export const WhiteButton = styled(Button)`
  ${WhiteButtonStyle}
`;

export const WhiteMediumButton = styled(MediumButton)`
  ${WhiteButtonStyle}
`;

export const WhiteSmallButton = styled(SmallButton)`
  ${WhiteButtonStyle}
`;

import styled, { css, keyframes } from 'styled-components';

export const ALERT_ANIMATION_TIME = 3000;

const showAndSlideUp = keyframes`
  0% {
    top: calc(var(--header-height) - 20px);
    opacity: 0.4;
  }

  5% {
    opacity: 1;
    top: calc(var(--header-height) + 20px);
  }

  90% {
    opacity: 1;
    top: calc(var(--header-height) + 20px);
  }

  95% {
    opacity: 0;
  }

  100% {
    top: 0;
  }
`;

export const SnackBar = styled.span<{ $view: boolean }>`
  position: fixed;
  font-size: 1.2rem;
  color: var(--main-white);
  background-color: var(--main-green);
  border: 1px solid var(--grey-dark);
  border-radius: 20px;
  padding: 12px 20px;
  top: var(--header-height);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;

  ${({ $view }) =>
    $view &&
    css`
      animation: ${showAndSlideUp} ${ALERT_ANIMATION_TIME}ms linear;
    `}
`;

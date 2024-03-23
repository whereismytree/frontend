/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

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

const SnackBarUI = styled.span<{ $view: boolean; $during: number }>`
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  font-size: 1.2rem;
  color: var(--main-white);
  background-color: var(--main-green);
  border: 1px solid var(--grey-dark);
  border-radius: 20px;
  padding: 12px 20px;
  opacity: 0;

  ${({ $view, $during }) =>
    $view &&
    css`
      animation: ${showAndSlideUp} ${$during}ms linear;
    `}
`;

const useSnackBar = () => {
  const [view, setView] = useState(false);
  const [during, setDuring] = useState(0);

  const render = (sec: number) => {
    setView(true);
    const ms = sec * 1000;
    setDuring(ms);
    setTimeout(() => setView(false), ms);
  };

  const SnackBar = ({ children }: { children: string }) => {
    return (
      <SnackBarUI $view={view} $during={during}>
        {children}
      </SnackBarUI>
    );
  };

  return { SnackBar, render };
};

export default useSnackBar;

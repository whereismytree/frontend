/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { keyframes } from 'styled-components';

export const Box = styled.div<{ $isOpen: boolean }>`
  z-index: 10;
  max-height: 60vh;
  background-color: #fff;
  position: relative;
  animation: ${({ $isOpen }) => ($isOpen ? slideUp : slideDown)} 1s forwards ease-in-out;
`;

export const ToggleButton = styled.button`
  border: 1px solid var(--grey-light);
  background-color: #fff;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 1rem;
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
`;

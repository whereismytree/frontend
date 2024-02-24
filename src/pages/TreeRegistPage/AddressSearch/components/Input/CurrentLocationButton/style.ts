import styled from 'styled-components';
import scopeIcon from 'assets/scope.svg';

export const LocationButton = styled.button`
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: start;
  gap: 16px;
  padding: 15px 10px;

  p {
    flex-grow: 1;
  }

  &::before {
    content: url(${scopeIcon});
    width: 20px;
    height: 20px;
  }
`;

export const Arrow = styled.div`
  position: relative;
  width: 6px;

  &::after,
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 10px 0 0 10px;
    background-color: var(--grey-dark);
  }

  &::after {
    top: -1.85px;
    transform: rotate(45deg);
  }

  &::before {
    top: 1.85px;
    transform: rotate(-45deg);
  }
`;

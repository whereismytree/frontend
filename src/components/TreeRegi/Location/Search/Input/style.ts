import styled from 'styled-components';
import search from 'assets/search.svg';

export const StyleSearchInput = styled.input`
  width: 100%;
  height: 5rem;
  font-size: 1.4rem;
  font-weight: 400;
  border: none;
  background-color: var(--grey-light);
  border-radius: 10px;
  padding-left: 48px;
  box-sizing: border-box;

  &:focus {
    background-color: initial;
    outline: 1px solid var(--main-green);
  }
`;

export const SearchWrapper = styled.div`
  position: relative;

  &::before {
    content: url(${search});
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--grey-medium);

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 55%;
    height: 1.2px;
    border-radius: 10px;
    background-color: var(--main-white);
    display: block;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

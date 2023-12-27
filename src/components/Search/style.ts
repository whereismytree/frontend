import styled from 'styled-components';
// import searchIcon from 'assets/search.svg';
import scopeIcon from 'assets/scope.svg';

export const SearchInput = styled.input`
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
  }
`;

export const Arrow = styled.div`
  position: relative;
  width: 6px;

  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    border-radius: 10px 0 0 10px;
    background-color: var(--grey-dark);
  }

  span:first-child {
    top: -1.85px;
    transform: rotate(45deg);
  }

  span:last-child {
    top: 1.85px;
    transform: rotate(-45deg);
  }
`;

export const SearchWrapper = styled.article`
  padding: 20px 24px 12px;
  border-bottom: 1px solid var(--grey-medium);
  box-sizing: border-box;
`;

export const SearchResult = styled.ul``;

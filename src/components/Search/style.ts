import styled from 'styled-components';
// import searchIcon from 'assets/search.svg';

export const Wrapper = styled.main`
  height: calc(100vh - (var(--header-height) + var(--navbar-height)));
  background-color: var(--grey-light);
`;

export const SearchWrapper = styled.article`
  background-color: var(--main-white);
  padding: 20px 24px 12px;
  border-bottom: 1px solid var(--grey-medium);
  box-sizing: border-box;
`;

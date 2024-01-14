import styled from 'styled-components';

export const Main = styled.main`
  height: calc(100vh - (var(--header-height) + var(--navbar-height)));
  background-color: var(--grey-light);
  overflow: scroll;

  &::after {
    content: '';
    clear: both;
    display: block;
  }

  form {
    label ~ div,
    label ~ input {
      margin-bottom: 20px;
    }
  }
`;

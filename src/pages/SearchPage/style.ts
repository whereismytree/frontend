import styled from 'styled-components';

export const Wrapper = styled.section`
  overflow: scroll;
  height: calc(var(--content-height) + var(--navbar-height));
`;

export const ItemWrapper = styled.div`
  cursor: pointer;
  display: block;
  padding: 1.6rem 2.4rem;
  border-bottom: 0.1rem solid var(--grey-light);
`;

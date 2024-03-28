import styled from 'styled-components';

export const REVIEW_PAGE_SIDE_GAP = '24px';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  padding: ${REVIEW_PAGE_SIDE_GAP};
  overflow: scroll;
  height: calc(var(--content-height) + var(--navbar-height));
`;

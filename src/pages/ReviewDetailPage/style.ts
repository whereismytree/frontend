import styled from 'styled-components';

export const REVIEW_PAGE_SIDE_GAP = '24px';

export const Main = styled.main`
  padding: ${REVIEW_PAGE_SIDE_GAP};
  overflow: scroll;
  height: calc(100vh - var(--header-height));
`;

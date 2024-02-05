import { REVIEW_PAGE_SIDE_GAP } from 'pages/ReviewDetailPage/style';
import styled from 'styled-components';

export const ImageWrapper = styled.section`
  width: calc(100% + (${REVIEW_PAGE_SIDE_GAP} * 2));
  margin-left: -${REVIEW_PAGE_SIDE_GAP};
  height: 420px;
  margin-top: 23px;
  position: relative;
  background-color: var(--grey-light);
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

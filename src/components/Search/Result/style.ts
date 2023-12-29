import { SubTitleFontStyle } from 'components/common/Item/style';
import styled from 'styled-components';

export const SearchResult = styled.ul`
  margin-top: 8px;
  list-style: none;
  background-color: var(--main-white);
  padding-bottom: var(--navbar-height);
  max-height: calc(100% - var(--header-height));
  overflow: scroll;
  box-sizing: border-box;
`;

export const ResultListItem = styled.li`
  border-bottom: 1px solid var(--grey-light);
  padding: 22px 24px;
  box-sizing: border-box;
`;

export const ResultItemAddress = styled.p`
  ${SubTitleFontStyle}
  margin-top: 8px;
`;

export const AddressType = styled.span`
  border-radius: 5px;
  padding: 1px 6px;
  background-color: var(--grey-light);
  margin-right: 10px;
`;

export const SearchTip = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 36px 0 0 24px;

  strong {
    font-size: 1.6rem;
    font-weight: 800;
  }

  span:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  span:last-child {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--grey-dark);
  }
`;

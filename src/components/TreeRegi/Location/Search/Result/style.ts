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
  color: var(--grey-dark);
  border-radius: 5px;
  padding: 1px 6px;
  background-color: var(--grey-light);
  margin-right: 10px;
`;

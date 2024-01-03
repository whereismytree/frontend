import { ReactElement, ReactNode } from 'react';
import SearchInput from './Input';
import SearchResult from './Result';
import CurrentLocationButton from './CurrentLocationButton/Index';
import * as S from './style';
import SearchTip from './Tip';

function Search({ children }: { children: ReactElement[] }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

function SearchHeader({ children }: { children: ReactNode }) {
  return <S.SearchWrapper>{children}</S.SearchWrapper>;
}

Search.Input = SearchInput;
Search.Header = SearchHeader;
Search.CurrentLocationButton = CurrentLocationButton;
Search.ResultList = SearchResult.List;
Search.ResultItem = SearchResult.Item;
Search.Tip = SearchTip;

export default Search;

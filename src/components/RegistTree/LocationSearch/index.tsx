import { ReactElement, ReactNode } from 'react';
import * as S from './style';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import CurrentLocationButton from './CurrentLocationButton/Index';

function Search({ children }: { children: ReactElement[] }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

function SearchHeader({ children }: { children: ReactNode }) {
  return <S.SearchWrapper>{children}</S.SearchWrapper>;
}

Search.Input = SearchInput;
Search.Header = SearchHeader;
Search.CurrentLocationButton = CurrentLocationButton;
Search.Result = SearchResult;

export default Search;

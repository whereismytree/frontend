import { ReactElement, ReactNode } from 'react';
import SearchInput from './Location/Search/SearchInput';
import SearchResult from './Location/Search/SearchResult';
import CurrentLocationButton from './Location/Search/CurrentLocationButton/Index';
import * as S from './style';

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

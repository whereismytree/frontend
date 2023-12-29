import { ReactElement, ReactNode } from 'react';
import * as S from './style';
import SearchInput from './Input';
import SearchResult from './Result';
import CurrentLocationButton from './Button/Index';

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

import { ReactNode, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyword } from 'store/modules/searchSlice';
import * as S from './style';

function Search({ children }: { children: ReactNode }) {
  return <S.SearchWrapper>{children}</S.SearchWrapper>;
}

function SearchInput() {
  const dispatch = useDispatch();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debunceSetKeyword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        dispatch(setKeyword(e.target.value));
      }, 500);
    },
    [dispatch],
  );

  return (
    <S.SearchInput
      type="search"
      placeholder="지번, 도로명, 건물명으로 검색"
      onChange={(e) => debunceSetKeyword(e)}
    />
  );
}

function CurrentLocationButton() {
  return (
    <S.LocationButton>
      <p>현재 위치로 설정</p>
      <S.Arrow>
        <span />
        <span />
      </S.Arrow>
    </S.LocationButton>
  );
}

function SearchResult() {
  const { keyword } = useSelector(({ search }) => search);

  return <S.SearchResult>{keyword}</S.SearchResult>;
}

Search.Input = SearchInput;
Search.CurrentLocationButton = CurrentLocationButton;
Search.Result = SearchResult;

export default Search;

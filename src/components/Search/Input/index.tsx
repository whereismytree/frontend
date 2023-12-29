import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setKeyword } from 'store/modules/searchSlice';
import { StyleSearchInput } from './style';

function SearchInput() {
  const dispatch = useDispatch();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounceSetKeyword = useCallback(
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
    <StyleSearchInput
      type="search"
      placeholder="지번, 도로명, 건물명으로 검색"
      onChange={(e) => debounceSetKeyword(e)}
    />
  );
}

export default SearchInput;

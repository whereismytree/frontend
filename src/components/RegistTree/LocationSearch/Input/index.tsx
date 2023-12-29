import { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchKeyword } from 'store/modules/locationSlice';
import * as S from './style';

function SearchInput() {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounceSetKeyword = useCallback(
    (value: string) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        dispatch(setSearchKeyword(value));
      }, 500);
    },
    [dispatch],
  );

  const clearKeyword = () => {
    setValue('');
    dispatch(setSearchKeyword(''));
  };

  return (
    <S.SearchWrapper>
      <S.StyleSearchInput
        type="search"
        value={value}
        placeholder="지번, 도로명, 건물명으로 검색"
        onChange={(e) => {
          debounceSetKeyword(e.target.value);
          setValue(e.target.value);
        }}
      />
      {value && <S.ClearButton type="reset" onClick={() => clearKeyword()} />}
    </S.SearchWrapper>
  );
}

export default SearchInput;

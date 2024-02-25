import React, { useRef, useEffect } from 'react';
import Topbar from 'components/Topbar';
import clearSearchIcon from 'assets/topbar-clear-search.svg';
import { debounce } from 'lodash';
import * as S from './style';

interface TSearchInputProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setKeyword }: TSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedSetKeyword = debounce(setKeyword, 300);

  useEffect(() => {
    // debounce cleanup
    return () => {
      debouncedSetKeyword.cancel();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSetKeyword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      debouncedSetKeyword(e.currentTarget.value);
    }
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      debouncedSetKeyword('');
    }
  };

  return (
    <Topbar>
      <S.Input
        ref={inputRef}
        placeholder="트리, 주소 검색"
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {inputRef.current && <S.ClearSearchIcon src={clearSearchIcon} onClick={handleClear} />}
    </Topbar>
  );
};

export default SearchInput;

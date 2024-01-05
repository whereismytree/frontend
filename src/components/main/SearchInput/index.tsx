import React, { useState } from 'react';
import Topbar from 'components/Topbar';
import clearSearchIcon from 'assets/topbar-clear-search.svg';
import * as S from './style';

interface TSearchInputProps {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ setKeyword }: TSearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setKeyword(inputValue);
    }
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <Topbar>
      <S.Input
        value={inputValue}
        placeholder="트리, 주소 검색"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {inputValue && <S.ClearSearchIcon src={clearSearchIcon} onClick={handleClear} />}
    </Topbar>
  );
};

export default SearchInput;

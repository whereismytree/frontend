import React, { useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import CurrentLocationButton from './CurrentLocationButton';
import * as S from './style';

function SearchInput({ render }: { render: (keyword: string) => React.ReactNode }) {
  const { data: keyword, watch } = useDebounce('', 300);
  const [haveKeyword, setHaveKeyword] = useState(false);
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    watch(e.target.value);
    setInput(e.target.value);
    setHaveKeyword(!!e.target.value);
  };

  const handleClearButtonClick = () => {
    setInput('');
  };

  return (
    <>
      <S.SearchBox>
        <S.InputWrapper>
          <S.Input
            type="search"
            value={input}
            placeholder="지번, 도로명, 건물명으로 검색"
            onChange={handleChange}
          />
          {haveKeyword && <S.ClearButton type="reset" onClick={handleClearButtonClick} />}
        </S.InputWrapper>
        <CurrentLocationButton />
      </S.SearchBox>
      {render(keyword)}
    </>
  );
}

export default SearchInput;

import React from 'react';
import serchIcon from 'assets/search-icon.svg';
import { useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
import * as S from './style';

const SearchBar = () => {
  const navigate = useNavigate();
  const handleGoToSearchPage = () => {
    navigate(`/${PATH.mainPage.root}/${PATH.mainPage.children.search}`);
  };

  return (
    <S.SearchBar onClick={handleGoToSearchPage}>
      <S.Img src={serchIcon} alt="검색" />
      <S.Input>트리, 주소 검색</S.Input>
    </S.SearchBar>
  );
};

export default SearchBar;

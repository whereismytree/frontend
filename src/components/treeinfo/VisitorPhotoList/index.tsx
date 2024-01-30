import React from 'react';
import defaultImg from 'assets/treeinfo-default.svg';
import * as S from '../style';

const VisitorPhotoList = () => {
  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>방문자 사진</S.SubTitle>
        <S.Count>17</S.Count>
      </S.TitleContainer>
      <S.PhotoList>
        <S.Photo src={defaultImg} />
        <S.Photo src={defaultImg} />
        <S.Photo src={defaultImg} />
        <S.Photo src={defaultImg} />
        <S.Photo src={defaultImg} />
        <S.Photo src={defaultImg} />
      </S.PhotoList>
      <S.PhotoMoreButton>방문자 사진 더보기</S.PhotoMoreButton>
    </S.Wrapper>
  );
};

export default VisitorPhotoList;

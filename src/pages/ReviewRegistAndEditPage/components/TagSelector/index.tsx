import React from 'react';
import TAG from 'constants/tag';
import Tag from '../Tag';
import * as S from './style';

const TagSelector = () => {
  return (
    <S.Wrapper>
      <S.Title>
        코멘트 리뷰 <span>(1개~3개)</span>
      </S.Title>
      <S.SubTitle>이 트리에 어울리는 코멘트를 골라주세요.</S.SubTitle>
      {TAG.map(({ id }) => {
        return (
          <S.TagContainer key={id}>
            <Tag id={id} />
          </S.TagContainer>
        );
      })}
    </S.Wrapper>
  );
};

export default TagSelector;

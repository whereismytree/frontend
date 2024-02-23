import React from 'react';
import TAG from 'constants/tag';
import Tag from '../Tag';
import * as S from './style';

interface ITagSelectorProp {
  tagIds: number[];
  setTagIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const TagSelector = ({ tagIds, setTagIds }: ITagSelectorProp) => {
  const handleTagSelect = (id: number) => {
    if (tagIds.includes(id)) {
      setTagIds((prev) => prev.filter((tagId) => tagId !== id));
    } else {
      setTagIds((prev) => [...prev, id]);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>
        코멘트 리뷰 <span>(1개~3개)</span>
      </S.Title>
      <S.SubTitle>이 트리에 어울리는 코멘트를 골라주세요.</S.SubTitle>
      {TAG.map(({ id }) => {
        return (
          <S.TagContainer key={id}>
            <Tag id={id} isSelected={tagIds.includes(id)} onClick={() => handleTagSelect(id)} />
          </S.TagContainer>
        );
      })}
    </S.Wrapper>
  );
};

export default TagSelector;

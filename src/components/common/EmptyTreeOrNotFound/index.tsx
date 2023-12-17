import React from 'react';
import questionMarkCat from 'assets/question_mark_cat.svg';
import * as S from './style';

interface IEmptyTreeOrNotFoundProp {
  title?: string;
  text: string;
  detailText?: string;
  buttonType?: string;
}

export const EmptyTreeOrNotFound = ({
  title,
  text,
  detailText,
  buttonType,
}: IEmptyTreeOrNotFoundProp) => {
  return (
    <S.Section>
      {title && <S.Title>{title}</S.Title>}
      <S.Img src={questionMarkCat} alt="물음표고양이" />
      <S.Text>{text}</S.Text>
      {detailText && <S.DetailText>{detailText}</S.DetailText>}
      {/* TODO: 버튼 컴포넌트 완성되면 추가 */}
      {buttonType && <S.Button>{buttonType}</S.Button>}
    </S.Section>
  );
};

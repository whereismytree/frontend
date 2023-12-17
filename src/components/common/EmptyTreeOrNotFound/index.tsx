import React from 'react';
import questionMarkCat from 'assets/question_mark_cat.svg';
import * as S from './style';

interface IEmptyTreeOrNotFoundProp {
  type: 'regist' | 'save' | '404' | '500';
}

export const EmptyTreeOrNotFound = ({ type }: IEmptyTreeOrNotFoundProp) => {
  console.log(type);

  return (
    <S.Section>
      <S.Title>400</S.Title>
      <S.Img src={questionMarkCat} alt="물음표고양이" />
      <S.Text>페이지를 찾을 수 없습니다.</S.Text>
      <S.DetailText>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </S.DetailText>
      <S.Button>홈으로</S.Button>
    </S.Section>
  );
};

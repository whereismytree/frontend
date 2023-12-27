/* eslint-disable react/require-default-props */
import React from 'react';
import questionMarkCat from 'assets/question_mark_cat.svg';
import * as S from './style';

interface IGuideProps {
  title?: string;
  children: React.ReactNode;
}

const Guide = ({ title, children }: IGuideProps) => {
  return (
    <S.Section>
      {title && <S.Title>{title}</S.Title>}
      <S.Img src={questionMarkCat} alt="물음표고양이" />
      {children}
    </S.Section>
  );
};

const GuideWithButton = ({ text, button }: { text: string; button: string }) => {
  return (
    <Guide>
      <S.Text>{text}</S.Text>
      <S.Button>{button}</S.Button>
    </Guide>
  );
};

const GuideError = ({ title, text, subText }: { title: string; text: string; subText: string }) => {
  return (
    <Guide title={title}>
      <S.Text>{text}</S.Text>
      <S.SubText>{subText}</S.SubText>
      <S.Button>홈으로</S.Button>
    </Guide>
  );
};

Guide.Button = GuideWithButton;
Guide.Error = GuideError;

export default Guide;

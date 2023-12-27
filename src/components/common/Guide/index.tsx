import React from 'react';
import questionMarkCat from 'assets/question_mark_cat.svg';
import Button from '../button';
import * as S from './style';

interface IGuideProps {
  title?: string;
  children: React.ReactNode;
}

interface IGuideWithButtonProps {
  text: string;
  btnText: string;
  onClick?: () => void;
}

interface IGuideErrorProps extends IGuideWithButtonProps {
  title: string;
  subText: string;
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

const GuideWithButton = ({ text, btnText, onClick }: IGuideWithButtonProps) => {
  return (
    <Guide>
      <S.Text>{text}</S.Text>
      <Button.MD onClick={onClick}>{btnText}</Button.MD>
    </Guide>
  );
};

const GuideError = ({ title, text, subText, btnText, onClick }: IGuideErrorProps) => {
  return (
    <Guide title={title}>
      <S.Text>{text}</S.Text>
      <S.SubText>{subText}</S.SubText>
      <Button.MD onClick={onClick}>{btnText}</Button.MD>
    </Guide>
  );
};

Guide.Button = GuideWithButton;
Guide.Error = GuideError;

export default Guide;

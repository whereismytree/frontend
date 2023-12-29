import React from 'react';
import * as S from './style';

interface ISubTitleProps {
  children: string;
  weight?: 300 | 350 | 400;
  reviewCount?: number;
}

interface ITitleProps {
  children: string;
  size?: number;
  weight?: 400 | 700 | 800;
  image?: true;
}

interface IItemWrapperProps {
  children: [React.ReactElement, React.ReactElement];
  gap?: number;
}

// Wrapper
function Item({ children, gap }: IItemWrapperProps) {
  return <S.Wrapper gap={gap}>{children}</S.Wrapper>;
}

function TreeWrapper({ children }: Omit<IItemWrapperProps, 'gap'>) {
  return (
    <S.TreeWrapper>
      <div>{children}</div>
    </S.TreeWrapper>
  );
}

// Title
function Title({ children, size, weight, image }: ITitleProps) {
  return (
    <S.Title size={size} $weight={weight} image={image}>
      {children}
    </S.Title>
  );
}

// SubTitle
function TreeReviewCount({ children }: { children?: number }) {
  return (
    <S.RightLineSpan>
      후기
      <S.Gap />
      {children}
    </S.RightLineSpan>
  );
}

function SubTitle({ children, reviewCount, weight }: ISubTitleProps) {
  return (
    <S.SubTitle weight={weight}>
      {reviewCount && <TreeReviewCount>{reviewCount}</TreeReviewCount>}
      {children}
    </S.SubTitle>
  );
}

Item.Tree = TreeWrapper;
Item.Title = Title;
Item.SubTitle = SubTitle;

export default Item;

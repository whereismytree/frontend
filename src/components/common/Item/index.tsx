import React from 'react';
import * as style from './style';

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
  return <style.Wrapper gap={gap}>{children}</style.Wrapper>;
}

function TreeWrapper({ children }: Omit<IItemWrapperProps, 'gap'>) {
  return (
    <style.TreeWrapper>
      <div>{children}</div>
    </style.TreeWrapper>
  );
}

// Title
function Title({ children, size, weight, image }: ITitleProps) {
  return (
    <style.Title size={size} weight={weight} image={image}>
      {children}
    </style.Title>
  );
}

// SubTitle
function TreeReviewCount({ children }: { children?: number }) {
  return (
    <style.RightLineSpan>
      후기
      <span style={{ display: 'inline-block', width: '10px' }} />
      {children}
    </style.RightLineSpan>
  );
}

function SubTitle({ children, reviewCount, weight }: ISubTitleProps) {
  return (
    <style.SubTitle weight={weight}>
      {reviewCount && <TreeReviewCount>{reviewCount}</TreeReviewCount>}
      {children}
    </style.SubTitle>
  );
}

Item.Tree = TreeWrapper;
Item.Title = Title;
Item.SubTitle = SubTitle;

export default Item;

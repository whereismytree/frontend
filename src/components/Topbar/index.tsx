import React from 'react';
import * as S from './style';

interface ITopbarProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Topbar = ({ children, onClick }: ITopbarProps) => {
  return (
    <S.Wrapper>
      <S.BackIcon onClick={onClick} />
      {children}
    </S.Wrapper>
  );
};

interface IPageIconProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const CurrentPageIcon = ({ src, alt, onClick }: IPageIconProps) => {
  return (
    <Topbar onClick={onClick}>
      <S.Icon src={src} alt={alt} />
    </Topbar>
  );
};

Topbar.Icon = CurrentPageIcon;

export default Topbar;

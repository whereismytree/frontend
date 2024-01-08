import React from 'react';
import { topbarImg } from 'assets/images';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface ITopbarProps {
  children: React.ReactNode;
}

const Topbar = ({ children }: ITopbarProps) => {
  const navigate = useNavigate();
  const handleGoToBack = () => {
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <S.BackIcon onClick={handleGoToBack} />
      {children}
    </S.Wrapper>
  );
};

interface IPageIconProps {
  type: 'tree' | 'candy' | 'star' | 'cookie';
}

const CurrentPageIcon = ({ type }: IPageIconProps) => {
  return (
    <Topbar>
      <S.Icon src={topbarImg[type]} alt={type} />
    </Topbar>
  );
};

Topbar.Icon = CurrentPageIcon;

export default Topbar;

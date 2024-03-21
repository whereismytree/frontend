import React from 'react';
import { topbarImg } from 'assets/images';
import { NavigateProps, useNavigate } from 'react-router-dom';
import * as S from './style';

type ITopbarProps = {
  navigate?: NavigateProps;
  children: React.ReactNode;
};

const Topbar = ({ navigate, children }: ITopbarProps) => {
  const navigator = useNavigate();
  const handleGoToBack = () => {
    if (navigate) {
      navigator(navigate.to, { state: navigate.state });
    } else {
      navigator(-1);
    }
  };

  return (
    <S.Wrapper>
      <S.BackIcon onClick={handleGoToBack} />
      {children}
    </S.Wrapper>
  );
};

type IPageIconProps = Pick<ITopbarProps, 'navigate'> & {
  type: 'tree' | 'candy' | 'star' | 'cookie';
};

const CurrentPageIcon = ({ navigate, type }: IPageIconProps) => {
  return (
    <Topbar navigate={navigate}>
      <S.Icon src={topbarImg[type]} alt={type} />
    </Topbar>
  );
};

Topbar.Icon = CurrentPageIcon;

export default Topbar;

import React from 'react';
import homeImg from 'assets/navbar-home.svg';
import candyImg from 'assets/navbar-candy.svg';
import starImg from 'assets/navbar-star.svg';
import cookieImg from 'assets/navbar-cookie.svg';
import * as S from './style';

interface INavButtonProps {
  src: string;
  text: string;
}

const NavButton = ({ src, text }: INavButtonProps) => {
  return (
    <S.Button>
      <S.Img src={src} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

const Navbar = () => {
  return (
    <S.Wrapper>
      <NavButton src={homeImg} text="홈" />
      <NavButton src={candyImg} text="트리 등록하기" />
      <NavButton src={starImg} text="저장한 트리" />
      <NavButton src={cookieImg} text="MY" />
    </S.Wrapper>
  );
};

export default Navbar;

import React from 'react';
import { navbarImg } from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';

interface INavButtonProps {
  src: { basic: string; active: string };
  alt: string;
  text: string;
  page: string;
}

const NavButton = ({ src, alt, text, page }: INavButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === page;
  const handleGoToPage = () => {
    navigate(page);
  };

  return (
    <S.Button onClick={handleGoToPage}>
      <S.Img src={isActive ? src.active : src.basic} alt={alt} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

const Navbar = () => {
  return (
    <S.Wrapper>
      <NavButton src={navbarImg.home} alt="home" text="홈" page="/main" />
      <NavButton src={navbarImg.candy} alt="regist" text="트리 등록하기" page="/regist" />
      <NavButton src={navbarImg.star} alt="save" text="저장한 트리" page="/save" />
      <NavButton src={navbarImg.cookie} alt="my" text="MY" page="/my" />
    </S.Wrapper>
  );
};

export default Navbar;

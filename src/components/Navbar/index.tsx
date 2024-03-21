import { navbarImg } from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';
import * as S from './style';

interface INavButtonProps {
  src: { basic: string; active: string };
  text: string;
  page: string;
  alt: string;
}

const NavButton = ({ src, text, page, alt }: INavButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === page;
  const handleGoToPage = () => {
    navigate(page);
  };

  return (
    <S.Button onClick={handleGoToPage}>
      <S.Img src={isActive ? src.active : src.basic} alt={`${alt}Icon`} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

const Navbar = () => {
  const mainPage = getPath('mainPage', 'root');
  const savePage = getPath('myPage', 'savedTrees');
  const registPage = getPath('treePage', 'regist', 'search');
  const myPage = getPath('myPage', 'root');

  return (
    <S.Wrapper>
      <NavButton src={navbarImg.home} text="홈" page={mainPage} alt="main" />
      <NavButton src={navbarImg.candy} text="트리 등록하기" page={registPage} alt="regist" />
      <NavButton src={navbarImg.star} text="저장한 트리" page={savePage} alt="save" />
      <NavButton src={navbarImg.cookie} text="MY" page={myPage} alt="my" />
    </S.Wrapper>
  );
};

export default Navbar;

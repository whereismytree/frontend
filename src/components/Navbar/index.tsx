import { navbarImg } from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
import * as S from './style';

interface INavButtonProps {
  src: { basic: string; active: string };
  text: string;
  page: string;
}

const NavButton = ({ src, text, page }: INavButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === page;
  const handleGoToPage = () => {
    navigate(page);
  };

  return (
    <S.Button onClick={handleGoToPage}>
      <S.Img src={isActive ? src.active : src.basic} alt={`${page.replace('/', '')}Icon`} />
      <S.Text>{text}</S.Text>
    </S.Button>
  );
};

const Navbar = () => {
  return (
    <S.Wrapper>
      <NavButton src={navbarImg.home} text="홈" page={PATH.mainPage} />
      <NavButton src={navbarImg.candy} text="트리 등록하기" page={PATH.registInfoPage} />
      <NavButton src={navbarImg.star} text="저장한 트리" page={PATH.savePage} />
      <NavButton src={navbarImg.cookie} text="MY" page={PATH.myPage} />
    </S.Wrapper>
  );
};

export default Navbar;

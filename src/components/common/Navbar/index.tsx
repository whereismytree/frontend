import { navbarImg } from 'assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
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
  const altGenerator = (pathName: string) => {
    return `${pathName.replace('/', '')}Icon`;
  };

  return (
    <S.Wrapper>
      <NavButton
        src={navbarImg.home}
        alt={altGenerator(PATH.mainPage)}
        text="홈"
        page={PATH.mainPage}
      />
      <NavButton
        src={navbarImg.candy}
        alt={altGenerator(PATH.registInfoPage)}
        text="트리 등록하기"
        page={PATH.registInfoPage}
      />
      <NavButton
        src={navbarImg.star}
        alt={altGenerator(PATH.savePage)}
        text="저장한 트리"
        page={PATH.savePage}
      />
      <NavButton
        src={navbarImg.cookie}
        alt={altGenerator(PATH.myPage)}
        text="MY"
        page={PATH.myPage}
      />
    </S.Wrapper>
  );
};

export default Navbar;

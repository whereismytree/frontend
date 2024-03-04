import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import Guide from 'components/common/Guide';
import getPath from 'utils/getPath';
import * as S from './style';

const InvalidAccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <Topbar>{null}</Topbar>
      <S.Wrapper>
        <Guide.Button
          text="올바르지 않은 접근입니다"
          btnText="메인 페이지로 이동"
          onClick={() => {
            navigate(getPath('mainPage', 'root'));
          }}
        />
      </S.Wrapper>
      <Navbar />
    </>
  );
};

export default InvalidAccess;

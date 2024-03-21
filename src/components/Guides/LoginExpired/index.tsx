import { useNavigate } from 'react-router-dom';
import Guide from 'components/common/Guide';
import getPath from 'utils/getPath';
import Layout from '../Layout';

const LoginExpiredGuide = ({ onClick }: { onClick?: () => void }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Guide.Button
        text="로그인 정보가 만료되었습니다."
        btnText="다시 로그인 하기"
        onClick={() => {
          navigate(getPath('loginPage', 'root'));
          sessionStorage.clear();
          if (onClick) onClick();
        }}
      />
    </Layout>
  );
};

export default LoginExpiredGuide;

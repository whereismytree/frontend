import { useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';
import Guide from 'components/common/Guide';
import Layout from '../Layout';

const UnauthorizedGuide = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Guide.Button
        text="로그인 이후 이용 가능한 페이지입니다"
        btnText="로그인 하러가기"
        onClick={() => navigate(getPath('loginPage', 'root'))}
      />
    </Layout>
  );
};

export default UnauthorizedGuide;

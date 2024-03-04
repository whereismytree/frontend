import { useNavigate } from 'react-router-dom';
import Guide from 'components/common/Guide';
import getPath from 'utils/getPath';
import Layout from '../Layout';

const InvalidAccessGuide = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Guide.Button
        text="올바르지 않은 접근입니다"
        btnText="메인 페이지로 이동"
        onClick={() => {
          navigate(getPath('mainPage', 'root'));
        }}
      />
    </Layout>
  );
};

export default InvalidAccessGuide;

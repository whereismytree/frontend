import Button from 'components/common/button';
import { useNavigate } from 'react-router-dom';

function RegistButton() {
  const navigate = useNavigate();

  const navigateRegistDetailPage = () => {
    navigate('../detail');
  };

  return <Button onClick={() => navigateRegistDetailPage()}>이 위치로 트리 등록하기</Button>;
}

export default RegistButton;

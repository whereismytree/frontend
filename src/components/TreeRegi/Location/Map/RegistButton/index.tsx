import Button from 'components/common/button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TRootState } from 'store';

function RegistButton() {
  const navigate = useNavigate();
  const { latitude, longitude } = useSelector((state: TRootState) => state.location);

  const navigateRegistDetailPage = () => {
    navigate('../detail');
  };

  return (
    <Button onClick={() => navigateRegistDetailPage()} disabled={!(latitude && longitude)}>
      이 위치로 트리 등록하기
    </Button>
  );
}

export default RegistButton;

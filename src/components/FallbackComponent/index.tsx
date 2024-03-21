import { FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Guide from 'components/common/Guide';
import Topbar from 'components/Topbar';
import { HTTPError } from 'error/HTTPError';
import getPath from 'utils/getPath';
import LoginExpiredGuide from 'components/Guides/LoginExpired';
import * as S from './style';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  if (error instanceof HTTPError) {
    if (error.statusCode === 401) {
      return <LoginExpiredGuide onClick={resetErrorBoundary} />;
    }

    return (
      <>
        <Topbar>{null}</Topbar>
        <S.Wrapper>
          <Guide.Error
            title={error.statusCode?.toString() || String(500)}
            text=""
            subText={error.message}
            btnText="홈으로"
            onClick={() => {
              resetErrorBoundary();
              navigate(getPath('mainPage', 'root'));
            }}
          />
        </S.Wrapper>
      </>
    );
  }

  return (
    <>
      <Topbar>{null}</Topbar>
      <S.Wrapper>
        <Guide.Error
          title={error.statusCode || 500}
          text=""
          subText={error.message}
          btnText="다시 시도"
          onClick={resetErrorBoundary}
        />
      </S.Wrapper>
    </>
  );
};

export default FallbackComponent;

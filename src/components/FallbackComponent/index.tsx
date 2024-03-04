import { FallbackProps } from 'react-error-boundary';
import Guide from 'components/common/Guide';
import Topbar from 'components/Topbar';
import * as S from './style';

const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => {
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

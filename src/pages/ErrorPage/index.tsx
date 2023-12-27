import React from 'react';
import Guide from 'components/common/Guide';
import * as S from './style';

export const ErrorPage = () => {
  return (
    <S.Wrapper>
      <Guide.Error
        title="404"
        text="페이지를 찾을 수 없습니다."
        subText={`페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.`}
      />
    </S.Wrapper>
  );
};

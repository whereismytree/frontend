import React from 'react';
import { EmptyTreeOrNotFound } from 'components/common/EmptyTreeOrNotFound';
import * as S from './style';

export const ErrorPage = () => {
  return (
    <S.Wrapper>
      <EmptyTreeOrNotFound
        title="404"
        text="페이지를 찾을 수 없습니다."
        detailText={`페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.\n입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.`}
        buttonType="홈으로"
      />
    </S.Wrapper>
  );
};

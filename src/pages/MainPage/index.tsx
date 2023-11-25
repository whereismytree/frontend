import React from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import * as S from './style';

export const MainPage = () => {
  const { container } = useKakaoMap();

  return (
    <div>
      <S.Wrapper>
        <S.Map ref={container}></S.Map>
      </S.Wrapper>
    </div>
  );
};

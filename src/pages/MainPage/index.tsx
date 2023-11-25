import React from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'components/main/ZoomControl';
import * as S from './style';

export const MainPage = () => {
  const { map, container } = useKakaoMap();

  return (
    <div>
      <S.Wrapper>
        <S.Map ref={container}></S.Map>
        <ZoomControl map={map} />
      </S.Wrapper>
    </div>
  );
};

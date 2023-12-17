/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import zoomInButton from 'assets/zoom-in-icon.svg';
import zoomOutButton from 'assets/zoom-out-icon.svg';
import * as S from './style';

export const ZoomControl = ({ map }: { map: any }) => {
  const onClickZoomIn = () => {
    map.setLevel(map.getLevel() - 1);
  };
  const onClickZoomOut = () => {
    map.setLevel(map.getLevel() + 1);
  };

  return (
    <S.ZoomControl>
      <img src={zoomInButton} alt="확대" onClick={onClickZoomIn} />
      <img src={zoomOutButton} alt="축소" onClick={onClickZoomOut} />
    </S.ZoomControl>
  );
};

export default ZoomControl;

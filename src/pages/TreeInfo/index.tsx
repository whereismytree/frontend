import React, { useRef } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import Topbar from 'components/Topbar';
import TreeTitle from 'components/treeinfo/TreeTitle';
import TreeDetails from 'components/treeinfo/TreeDetails';
import Button from 'components/common/button';
import * as S from './style';

export const TreeInfo = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useKakaoMap(mapContainer);
  console.log(map);

  return (
    <>
      <Topbar.Icon type="tree" />
      <h1 className="hidden">트리 상세 정보 페이지</h1>
      <S.Map ref={mapContainer}>TreeInfo</S.Map>
      <TreeTitle />
      <TreeDetails />
      <Button>후기 작성하기</Button>
    </>
  );
};

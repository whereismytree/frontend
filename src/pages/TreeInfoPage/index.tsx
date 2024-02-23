import React, { useRef } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import Topbar from 'components/Topbar';
import TreeTitle from 'components/treeinfo/TreeTitle';
import TreeDetails from 'components/treeinfo/TreeDetails';
import VisitorPhotoList from 'components/treeinfo/VisitorPhotoList';
import VisitorReviewList from 'components/treeinfo/VisitorReviewList';
import Button from 'components/common/button';
import { useLocation } from 'react-router-dom';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import * as S from './style';

export const TreeInfo = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useKakaoMap(mapContainer);
  const location = useLocation();
  const treeId = location.pathname.split('/')[2];
  const { data } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  console.log(map);

  return data ? (
    <>
      <Topbar.Icon type="tree" />
      <h1 className="hidden">트리 상세 정보 페이지</h1>
      <S.InfoContainer>
        <S.Map ref={mapContainer}>TreeInfo</S.Map>
        <TreeTitle treeInfo={data} />
        <TreeDetails treeId={treeId} />
        <VisitorPhotoList treeId={treeId} />
        <VisitorReviewList treeId={treeId} />
      </S.InfoContainer>
      <S.ButtonContainer>
        <Button>후기 작성하기</Button>
      </S.ButtonContainer>
    </>
  ) : null;
};

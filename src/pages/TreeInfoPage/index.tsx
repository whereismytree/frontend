import React, { useState, useEffect, useRef } from 'react';
import Topbar from 'components/Topbar';
import TreeTitle from 'pages/TreeInfoPage/components/TreeTitle';
import TreeDetails from 'pages/TreeInfoPage/components/TreeDetails';
import VisitorPhotoList from 'pages/TreeInfoPage/components/VisitorPhotoList';
import VisitorReviewList from 'pages/TreeInfoPage/components/VisitorReviewList';
import Button from 'components/common/button';
import { useLocation } from 'react-router-dom';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import treeMarker from 'assets/tree_marker.svg';
import * as S from './style';

export const TreeInfo = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const treeId = location.pathname.split('/')[2];
  const { data } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (data) {
      window.kakao.maps.load(async () => {
        const center = new window.kakao.maps.LatLng(data.lat, data.lng);
        const options = { center, level: 3 };
        if (mapContainer.current) {
          const map = new window.kakao.maps.Map(mapContainer.current, options);
          const imgSize = new window.kakao.maps.Size([24, 24]);
          const markerImage = new window.kakao.maps.MarkerImage(treeMarker, imgSize);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(data.lat, data.lng),
            map,
            title: data.name,
            image: markerImage,
          });
          setMap(map);
        }
      });
    }
  }, [data]);

  return data ? (
    <>
      <Topbar.Icon type="tree" />
      <h1 className="hidden">트리 상세 정보 페이지</h1>
      <S.InfoContainer>
        <S.Map ref={mapContainer}>TreeInfo</S.Map>
        <TreeTitle treeInfo={data} />
        <TreeDetails treeId={treeId} />
        <VisitorPhotoList treeInfo={data} />
        <VisitorReviewList treeInfo={data} />
      </S.InfoContainer>
      <S.ButtonContainer>
        <Button>후기 작성하기</Button>
      </S.ButtonContainer>
    </>
  ) : null;
};

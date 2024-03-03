import React, { useState, useEffect, useRef } from 'react';
import Topbar from 'components/Topbar';
import TreeTitle from 'pages/TreeInfoPage/components/TreeTitle';
import TreeDetails from 'pages/TreeInfoPage/components/TreeDetails';
import VisitorPhotoList from 'pages/TreeInfoPage/components/VisitorPhotoList';
import VisitorReviewList from 'pages/TreeInfoPage/components/VisitorReviewList';
import Button from 'components/common/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import treeMarker from 'assets/tree_marker.svg';
import useKakaoMap from 'hooks/useKakaoMap';
import * as S from './style';

type TPosition = number | undefined;
interface ILatLng {
  lat: TPosition;
  lng: TPosition;
}

export const TreeInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const treeId = location.pathname.split('/')[2];
  const mapContainer = useRef<HTMLDivElement>(null);
  const [latLng, setLatLng] = useState<ILatLng>();
  const { data } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);
  const map = useKakaoMap(mapContainer, latLng);

  useEffect(() => {
    window.kakao.maps.load(() => {
      if (data) {
        setLatLng({ lat: data.lat, lng: data.lng });
      }
    });
  }, [data]);

  useEffect(() => {
    const drawTree = async () => {
      if (map && data && latLng) {
        const imageSize = new window.kakao.maps.Size(24, 24);
        const markerImage = new window.kakao.maps.MarkerImage(treeMarker, imageSize);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const marker = new window.kakao.maps.Marker({
          map,
          title: data.name,
          position: new window.kakao.maps.LatLng(latLng.lat, latLng.lng),
          image: markerImage,
        });
      }
    };

    window.kakao.maps.load(() => {
      drawTree();
    });
  }, [map, data, latLng]);

  const handleGoToReviewRegist = () => {
    navigate(`/review/regist/${treeId}`, {
      state: { treeName: data?.name, location: data?.roadAddress, type: 'regist' },
    });
  };

  return data ? (
    <>
      <Topbar.Icon type="tree" />
      <h1 className="hidden">트리 상세 정보 페이지</h1>
      <S.InfoContainer>
        <S.Map ref={mapContainer}>로딩중</S.Map>
        <TreeTitle treeId={Number(treeId)} />
        <TreeDetails treeId={treeId} />
        <VisitorPhotoList treeInfo={data} />
        <VisitorReviewList treeInfo={data} />
      </S.InfoContainer>
      <S.ButtonContainer>
        <Button onClick={handleGoToReviewRegist}>후기 작성하기</Button>
      </S.ButtonContainer>
    </>
  ) : null;
};

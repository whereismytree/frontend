import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'components/main/ZoomControl';
import MyLocationButton from 'components/main/MyLocationButton';
import TreeMarker from 'assets/tree_marker_default.svg';
import testJSON from 'assets/treedata.json';
import * as S from './style';

interface ITreeInfo {
  treeId: number;
  name: string;
  latitude: number;
  longitude: number;
}

export const MainPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map } = useKakaoMap(mapContainer);

  const getTreeData = async () => {
    // TODO: 추후 서버로부터 데이터 받아오는 코드로 변경
    // const response = await axios.get('');
    // return response.data.trees;
    return testJSON.trees;
  };

  const createMarker = (map: any, treeInfo: ITreeInfo) => {
    const bounds = map.getBounds(); // 현재 지도 영역 경계 가져오기
    const swLatLng = bounds.getSouthWest(); // 경계의 남서쪽 좌표 가져오기
    const neLatLng = bounds.getNorthEast(); // 경계의 북동쪽 좌표 가져오기

    // 트리의 위치가 경계 내에 있는지 확인
    const bufferLat = neLatLng.getLat() - swLatLng.getLat();
    const bufferLng = neLatLng.getLng() - swLatLng.getLng();
    if (
      treeInfo.latitude < swLatLng.getLat() - bufferLat ||
      treeInfo.latitude > neLatLng.getLat() + bufferLat ||
      treeInfo.longitude < swLatLng.getLng() - bufferLng ||
      treeInfo.longitude > neLatLng.getLng() + bufferLng
    ) {
      // 트리의 위치가 경계 밖에 있다면 마커 미생성
      return null;
    }

    const imageSrc = TreeMarker;
    const imageSize = new window.kakao.maps.Size(64, 69);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
    const marker = new window.kakao.maps.Marker({
      map: map,
      title: treeInfo.name,
      position: new window.kakao.maps.LatLng(treeInfo.latitude, treeInfo.longitude),
      image: markerImage,
    });

    return marker;
  };

  useEffect(() => {
    const drawTree = async () => {
      const treeMarkers = await getTreeData();
      treeMarkers.forEach((tree: any) => createMarker(map, tree));
    };

    if (map) {
      drawTree();
    }
  }, [map]);

  return (
    <div>
      <S.Wrapper>
        <S.Map ref={mapContainer}>
          <MyLocationButton map={map} />
          <ZoomControl map={map} />
        </S.Map>
      </S.Wrapper>
    </div>
  );
};

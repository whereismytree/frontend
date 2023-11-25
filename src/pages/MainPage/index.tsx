import React, { useEffect } from 'react';
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
  const { map, container } = useKakaoMap();

  const getTreeData = async () => {
    // TODO: 추후 서버로부터 데이터 받아오는 코드로 변경
    // const response = await axios.get('');
    // return response.data.trees;
    return testJSON.trees;
  };

  const createMarker = (map: any, treeInfo: ITreeInfo) => {
    // TODO: 현재 보이는 지도의 경계까지 트리만 표시하도록 수정 필요
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
      if (map) {
        const treeMarkers = await getTreeData();
        treeMarkers.forEach((tree: any) => createMarker(map, tree));
      }
    };

    drawTree();
  }, [map]);

  return (
    <div>
      <S.Wrapper>
        <S.Map ref={container}>
          <MyLocationButton map={map} />
          <ZoomControl map={map} />
        </S.Map>
      </S.Wrapper>
    </div>
  );
};

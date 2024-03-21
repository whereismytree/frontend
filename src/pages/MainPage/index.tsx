import React, { useRef, useState } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'pages/MainPage/components/ZoomControl';
import MyLocationButton from 'components/common/MyLocationButton';
import MainSearchInput from 'pages/MainPage/components/SearchBar';
import ResearchButton from 'pages/MainPage/components/ReSearchButton';
import TreeInfoCard from 'pages/MainPage/components/TreeInfoCard';
import Navbar from 'components/Navbar';
import { IMapItem } from 'types/apiResponse';
import { useLocation } from 'react-router-dom';
import useFetchTreeData from 'pages/MainPage/hooks';
import * as S from './style';

export const MainPage = () => {
  const { state } = useLocation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map } = useKakaoMap(mapContainer, (map) => {
    if (state && state.lat && state.lng) {
      const { lat, lng } = state;
      const center = new window.kakao.maps.LatLng(lat, lng);
      map.setCenter(center);
    }
  });
  const [showTreeInfo, setShowTreeInfo] = useState<boolean>(false);
  const [currentTreeInfoData, setTreeInfoData] = useState<IMapItem | null>(null);
  const redrawTree = useFetchTreeData(map, setTreeInfoData, setShowTreeInfo);

  return (
    <div>
      <S.Map ref={mapContainer}>
        <MainSearchInput />
        <ResearchButton redrawTree={redrawTree} setShowTreeInfo={setShowTreeInfo} />
        <S.MapButton showTreeInfo={showTreeInfo} direction="left">
          <MyLocationButton map={map} />
        </S.MapButton>
        <S.MapButton showTreeInfo={showTreeInfo} direction="right">
          <ZoomControl map={map} />
        </S.MapButton>
        {showTreeInfo && <TreeInfoCard id={currentTreeInfoData?.id as number} />}
      </S.Map>
      <Navbar />
    </div>
  );
};

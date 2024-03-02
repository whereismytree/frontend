import React, { useRef, useState } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'pages/MainPage/components/ZoomControl';
import MyLocationButton from 'components/common/MyLocationButton';
import MainSearchInput from 'pages/MainPage/components/SearchBar';
import ResearchButton from 'pages/MainPage/components/ReSearchButton';
import TreeInfoCard from 'pages/MainPage/components/TreeInfoCard';
import Navbar from 'components/Navbar';
import { IMapItem } from 'types/apiResponse';
import useFetchTreeData from 'hooks/useFetchTreeData';
import * as S from './style';

export const MainPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map } = useKakaoMap(mapContainer);
  const [showTreeInfo, setShowTreeInfo] = useState<boolean>(false);
  const [currentTreeInfoData, setTreeInfoData] = useState<IMapItem | null>(null);
  const redrawTree = useFetchTreeData(map, setTreeInfoData, setShowTreeInfo);

  return (
    <div>
      <S.Map ref={mapContainer}>
        <MainSearchInput />
        <ResearchButton redrawTree={redrawTree} setShowTreeInfo={setShowTreeInfo} />
        <S.MapButtons>
          <MyLocationButton map={map} />
          <ZoomControl map={map} />
        </S.MapButtons>
        {showTreeInfo && <TreeInfoCard id={currentTreeInfoData?.id} />}
      </S.Map>
      <Navbar />
    </div>
  );
};

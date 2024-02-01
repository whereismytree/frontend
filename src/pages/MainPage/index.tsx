import React, { useRef, useState } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'components/main/ZoomControl';
import MyLocationButton from 'components/common/MyLocationButton';
import MainSearchInput from 'components/main/SearchBar';
import ResearchButton from 'components/main/ReSearchButton';
import TreeInfoCard from 'components/main/TreeInfoCard';
import Navbar from 'components/Navbar';
import { ITreeItem } from 'types/apiResponse';
import useFetchTreeData from 'hooks/useFetchTreeData';
import * as S from './style';

export const MainPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map } = useKakaoMap(mapContainer);
  const [showTreeInfo, setShowTreeInfo] = useState<boolean>(false);
  const [currentTreeInfoData, setTreeInfoData] = useState<ITreeItem | null>(null);
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
        {showTreeInfo && <TreeInfoCard data={currentTreeInfoData} />}
      </S.Map>
      <Navbar />
    </div>
  );
};

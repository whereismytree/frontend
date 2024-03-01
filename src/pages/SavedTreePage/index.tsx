import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import { useEffect, useRef, useState } from 'react';
import useMarkerMap, { TreePostionItem } from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import Guide from 'components/common/Guide';
import formatTreeListToPostions from 'utils/formatTreeListToPostions';
import TreeList from 'components/TreeList';
import useSavedTrees from './hooks';
import * as S from './style';

const SavePage = () => {
  const mapContainer = useRef(null);
  const [positions, setPositions] = useState<TreePostionItem[]>([]);
  const { map } = useMarkerMap(mapContainer, {
    positions,
    initialMapLevel: 6,
    markerImageSrc: treeMarker,
    imageSize: [32, 32],
  });
  const savedTrees = useSavedTrees();

  useEffect(() => {
    window.kakao.maps.load(() => {
      if (map && savedTrees) {
        const positions = formatTreeListToPostions(savedTrees);
        setPositions(positions);
      }
    });
  }, [map, savedTrees]);

  return (
    <>
      <Topbar.Icon type="star" />
      {savedTrees.length ? (
        <S.Map ref={mapContainer}>
          <TreeList list={savedTrees} type="saved" />
        </S.Map>
      ) : (
        <S.Wrapper>
          <Guide text="저장한 트리가 없어요" />
        </S.Wrapper>
      )}
      <Navbar />
    </>
  );
};

export default SavePage;

import { useRef } from 'react';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import Guide from 'components/common/Guide';
import SlideBox from 'components/SlideBox';
import TreeList from 'components/TreeList';
import useMarkerMap from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import useSavedTrees from './hooks';
import * as S from './style';

const SavePage = () => {
  const savedTrees = useSavedTrees();
  const mapContainer = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { map } = useMarkerMap(mapContainer, {
    trees: savedTrees,
    markerImageSrc: treeMarker,
    imageSize: [32, 32],
  });

  return (
    <>
      <Topbar.Icon type="star" />
      <S.Content>
        <S.Map ref={mapContainer} />
        <SlideBox>
          <SlideBox.Menu maxHeight="60vh">
            <SlideBox.Toggle>{(isOpen) => `${isOpen ? '지도' : '목록'}보기`}</SlideBox.Toggle>
            <TreeList type="saved" list={savedTrees} />
          </SlideBox.Menu>
        </SlideBox>
        {savedTrees.length === 0 && (
          <S.GuideWrapper>
            <Guide text="저장한 트리가 없어요" />
          </S.GuideWrapper>
        )}
      </S.Content>
      <Navbar />
    </>
  );
};

export default SavePage;

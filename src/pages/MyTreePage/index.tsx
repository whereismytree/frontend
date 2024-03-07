import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import useMarkerMap from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import Guide from 'components/common/Guide';
import TreeList from 'components/TreeList';
import SlideBox from 'components/SlideBox';
import getPath from 'utils/getPath';
import useRegistedTrees from './hooks';
import * as S from './style';

const SavePage = () => {
  const navigate = useNavigate();
  const savedTrees = useRegistedTrees();
  const mapContainer = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { map } = useMarkerMap(mapContainer, {
    trees: savedTrees,
    markerImageSrc: treeMarker,
    imageSize: [32, 32],
  });

  const handleGoRegistTreePage = () => {
    navigate(getPath('treePage', 'regist', 'search'));
  };

  return (
    <>
      <Topbar.Icon type="star" />
      {savedTrees.length ? (
        <S.Content>
          <SlideBox>
            <S.Map ref={mapContainer} />
            <SlideBox.Menu maxHeight="400px">
              <SlideBox.Toggle>{(isOpen) => `${isOpen ? '지도' : '목록'}보기`}</SlideBox.Toggle>
              <TreeList type="saved" list={savedTrees} />
            </SlideBox.Menu>
          </SlideBox>
        </S.Content>
      ) : (
        <S.GuideWrapper>
          <Guide.Button
            text="저장한 트리가 없어요"
            btnText="트리 등록하러 가기"
            onClick={handleGoRegistTreePage}
          />
        </S.GuideWrapper>
      )}
      <Navbar />
    </>
  );
};

export default SavePage;

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import Guide from 'components/common/Guide';
import SlideBox from 'components/SlideBox';
import TreeList from 'components/TreeList';
import useMarkerMap from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import getPath from 'utils/getPath';
import useRegistedTrees from './hooks';
import * as S from './style';

const MyTreePage = () => {
  const navigate = useNavigate();
  const registedTrees = useRegistedTrees();
  const mapContainer = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { map } = useMarkerMap(mapContainer, {
    trees: registedTrees,
    markerImageSrc: treeMarker,
    imageSize: [32, 32],
  });

  const handleGoRegistTreePage = () => {
    navigate(getPath('treePage', 'regist', 'search'));
  };

  return (
    <>
      <Topbar.Icon type="star" />
      <S.Content>
        <S.Map ref={mapContainer} />
        <SlideBox>
          <SlideBox.Menu maxHeight="60vh">
            <SlideBox.Toggle>{(isOpen) => `${isOpen ? '지도' : '목록'}보기`}</SlideBox.Toggle>
            <TreeList type="registed" list={registedTrees} />
          </SlideBox.Menu>
        </SlideBox>
        {registedTrees.length === 0 && (
          <S.GuideWrapper>
            <Guide.Button
              text="등록한 트리가 없어요"
              btnText="트리 등록하러 가기"
              onClick={handleGoRegistTreePage}
            />
          </S.GuideWrapper>
        )}
      </S.Content>
      <Navbar />
    </>
  );
};

export default MyTreePage;

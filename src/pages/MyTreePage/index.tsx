import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import { useEffect, useRef, useState } from 'react';
import useMarkerMap, { TreePostionItem } from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import Guide from 'components/common/Guide';
import TreeList from 'components/TreeList';
import { useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';
import formatTreeListToPostions from 'utils/formatTreeListToPostions';
import useRegistedTree from './hooks';
import * as S from './style';

const RegistedTreePage = () => {
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const [positions, setPositions] = useState<TreePostionItem[]>([]);
  const registedTrees = useRegistedTree();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { map } = useMarkerMap(mapContainer, {
    initialMapLevel: 6,
    markerImageSrc: treeMarker,
    positions,
    imageSize: [32, 32],
  });

  useEffect(() => {
    window.kakao.maps.load(() => {
      if (map && registedTrees) {
        const postions = formatTreeListToPostions(registedTrees);
        setPositions(postions);
      }
    });
  }, [map, registedTrees]);

  return (
    <>
      <Topbar.Icon type="cookie" />
      {registedTrees.length ? (
        <S.Map ref={mapContainer}>
          <TreeList list={registedTrees} type="registed" />
        </S.Map>
      ) : (
        <S.Wrapper>
          <Guide.Button
            text="등록한 트리가 없어요"
            btnText="트리 등록하러 가기"
            onClick={() => navigate(getPath('treePage', 'regist', 'search'))}
          />
        </S.Wrapper>
      )}
      <Navbar />
    </>
  );
};

export default RegistedTreePage;

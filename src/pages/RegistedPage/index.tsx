import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import { useEffect, useRef, useState } from 'react';
import useMarkerMap from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import Guide from 'components/common/Guide';
import TreeList from 'components/TreeList';
import { useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
import useRegistedTree from 'hooks/useRegistedTree';
import * as S from './style';

const RegistedTreePage = () => {
  const mapContainer = useRef(null);
  const [positions, setPositions] = useState<any>();
  const registedTrees = useRegistedTree();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { map } = useMarkerMap({
    mapContainer,
    markerImageSrc: treeMarker,
    positions,
    imageSize: [24, 24],
  });

  useEffect(() => {
    window.kakao.maps.load(() => {
      setPositions(
        registedTrees.map((tree) => {
          return {
            name: tree.name,
            latlng: new window.kakao.maps.LatLng(tree.lat, tree.lng),
          };
        }),
      );
    });
  }, []);

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
            onClick={() => navigate(`${PATH.registInfoPage}/search`)}
          />
        </S.Wrapper>
      )}
      <Navbar />
    </>
  );
};

export default RegistedTreePage;

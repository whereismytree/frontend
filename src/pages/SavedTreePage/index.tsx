import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import { useEffect, useRef, useState } from 'react';
import useMarkerMap from 'hooks/useMarkerMap';
import treeMarker from 'assets/tree_marker.svg';
import Guide from 'components/common/Guide';
import TreeList from 'components/TreeList';
import { ITreeListItem } from 'types/TreeListApiResponse';
import useSavedTrees from './hooks';
import * as S from './style';

const SavePage = () => {
  const mapContainer = useRef(null);
  const [positions, setPositions] = useState<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { map } = useMarkerMap({
    mapContainer,
    markerImageSrc: treeMarker,
    positions,
    imageSize: [24, 24],
  });
  const data = useSavedTrees();

  const savedTrees: ITreeListItem[] = data?.trees || [];

  useEffect(() => {
    window.kakao.maps.load(() => {
      setPositions(
        savedTrees.map((tree) => {
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

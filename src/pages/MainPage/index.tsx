import React, { useEffect, useRef, useState } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'components/main/ZoomControl';
import MyLocationButton from 'components/common/MyLocationButton';
import treeMarkerImg from 'assets/tree_marker_default.svg';
// import focusTreeMarkerImg from 'assets/tree_marker_focus.svg';
import treeJSON from 'assets/treedata.json';
import TreeInfo from 'components/main/TreeInfo';
import Navbar from 'components/Navbar';
import { ITreeItem } from 'types/apiResponse';
import * as S from './style';

export const MainPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map } = useKakaoMap(mapContainer);
  const [showTreeInfo, setShowTreeInfo] = useState<boolean>(false);
  const [currentTreeInfoData, setTreeInfoData] = useState<ITreeItem | null>(null);

  useEffect(() => {
    const getTreeData = async () => {
      /*
			TODO: api 서버에 데이터가 없어 json으로 대체했습니다. 추후 변경 예정
			const bounds = map.getBounds();
			const swLatLng = bounds.getSouthWest();
			const neLatLng = bounds.getNorthEast();
			const response = await axios.get<TreeItem[]>(
				`${process.env.REACT_APP_TREE_API_URL}v1/trees/map`,
				{
					params: {
						topLeftLat: swLatLng.getLat(),
						topLeftLng: swLatLng.getLng(),
						topRightLat: neLatLng.getLat(),
						topRightLng: swLatLng.getLng(),
						bottomLeftLat: swLatLng.getLat(),
						bottomLeftLng: neLatLng.getLng(),
						bottomRightLat: neLatLng.getLat(),
						bottomRightLng: neLatLng.getLng(),
					},
					headers: { accept: 'application/json;charset=UTF-8' },
				},
			);
			return response.data;
			 */
      return treeJSON.trees;
    };

    const createMarker = (map: any, treeInfo: ITreeItem) => {
      const imageSrc = treeMarkerImg;
      const imageSize = new window.kakao.maps.Size(64, 69);
      const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
      const marker = new window.kakao.maps.Marker({
        map,
        title: treeInfo.name,
        position: new window.kakao.maps.LatLng(treeInfo.lat, treeInfo.lng),
        image: markerImage,
      });

      return marker;
    };

    function handleTreeMarker(tree: ITreeItem) {
      return () => {
        setTreeInfoData(tree);
        setShowTreeInfo((prev) => !prev);
      };
    }

    const drawTree = async () => {
      const treeMarkers = await getTreeData();
      if (treeMarkers) {
        treeMarkers.forEach((tree: ITreeItem) => {
          const marker = createMarker(map, tree);
          window.kakao.maps.event.addListener(marker, 'click', handleTreeMarker(tree));
        });
      }
    };

    if (map) {
      drawTree();
    }
  }, [map]);

  return (
    <div>
      <S.Map ref={mapContainer}>
        <S.MapButtons>
          <MyLocationButton map={map} />
          <ZoomControl map={map} />
        </S.MapButtons>
        {showTreeInfo && <TreeInfo data={currentTreeInfoData} />}
      </S.Map>
      <Navbar />
    </div>
  );
};

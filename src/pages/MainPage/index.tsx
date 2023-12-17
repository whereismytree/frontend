/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef } from 'react';
import useKakaoMap from 'hooks/useKakaoMap';
import ZoomControl from 'components/main/ZoomControl';
import MyLocationButton from 'components/common/MyLocationButton';
import treeMarkerImg from 'assets/tree_marker_default.svg';
// import focusTreeMarkerImg from 'assets/tree_marker_focus.svg';
import treeJSON from 'assets/treedata.json';
import * as S from './style';

type TreeItem = {
  name: string;
  lat: number;
  lng: number;
  addressType: string;
  roadAddress: string;
  streetAddress: string;
  detailAddress: string;
  exhibitionStartDate: string;
  exhibitionEndDate: string;
  spaceType: string;
  businessDays: string;
  isPet: boolean;
  title: string;
  extraInfo: string;
};

export const MainPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const { map } = useKakaoMap(mapContainer);

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

    const createMarker = (map: any, treeInfo: TreeItem) => {
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

    const drawTree = async () => {
      const treeMarkers = await getTreeData();
      if (treeMarkers) {
        treeMarkers.forEach((tree: TreeItem) => createMarker(map, tree));
      }
    };

    if (map) {
      drawTree();
    }
  }, [map]);

  return (
    <div>
      <S.Map ref={mapContainer}>
        <MyLocationButton map={map} />
        <ZoomControl map={map} />
      </S.Map>
    </div>
  );
};

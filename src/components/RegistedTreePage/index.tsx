/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef } from 'react';
import useMarkerMap from 'hooks/useMarkerMap';
import useApiQuery from 'hooks/useApiQuery';
import treeMarker from 'assets/tree_marker.svg';
import RegistedTreeList from './List';
import * as S from './style';

/**
 * TODO: test를 위한 mock data입니다. 서버에서 가지고 있는 데이터로 교체해야 합니다.
 */
const positions = [
  {
    name: '카카오',
    latlng: new window.kakao.maps.LatLng(33.450705, 126.570677),
  },
  {
    name: '생태연못',
    latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
  },
  {
    name: '텃밭',
    latlng: new window.kakao.maps.LatLng(33.450879, 126.56994),
  },
  {
    name: '근린공원',
    latlng: new window.kakao.maps.LatLng(33.451393, 126.570738),
  },
];

interface IRegistedTreeAPIResponse {
  trees: {
    treeId: number;
    name: string;
    lat: number;
    lng: number;
    address: string;
    reviewsCount: number;
  }[];
  totalTrees: number;
}

function RegistedTreeMap() {
  const mapContainer = useRef(null);
  const { map } = useMarkerMap({
    mapContainer,
    markerImageSrc: treeMarker,
    positions,
    imageSize: [24, 24],
  });
  const { data } = useApiQuery<IRegistedTreeAPIResponse>(
    'v1/my/trees/posted?userId=pjy90123@gmail.com',
  );

  return (
    <S.Map ref={mapContainer}>
      <RegistedTreeList />
    </S.Map>
  );
}

export default RegistedTreeMap;

/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import { useEffect, useRef, useState } from 'react';
import useMarkerMap from 'hooks/useMarkerMap';
import useApiQuery from 'hooks/useApiQuery';
import treeMarker from 'assets/tree_marker.svg';
import Guide from 'components/common/Guide';
import TreeList from 'components/TreeList';
import { useNavigate } from 'react-router-dom';
import PATH from 'constants/path';
import ITreeListApiResponse, { ITreeListItem } from 'types/TreeListApiResponse';
import * as S from './style';

const SavePage = () => {
  const mapContainer = useRef(null);
  const [positions, setPositions] = useState<any>();
  const { map } = useMarkerMap({
    mapContainer,
    markerImageSrc: treeMarker,
    positions,
    imageSize: [24, 24],
  });
  const { data } = useApiQuery<ITreeListApiResponse>('v1/my/trees/posted');
  const navigate = useNavigate();

  /**
   * TODO: test를 위한 mock data입니다. 서버에서 가지고 있는 데이터로 교체해야 합니다.
   */
  const listData: ITreeListItem[] | [] = [];
  //   {
  //     treeId: 123,
  //     name: '롯데월드타워 트리',
  //     lat: 37.5665,
  //     lng: 126.978,
  //     address: '서울특별시 어쩌구 무슨동 101 1,2층',
  //     reviewsCount: 5,
  //   },
  // ];

  useEffect(() => {
    window.kakao.maps.load(() => {
      /**
       * TODO: test를 위한 mock data입니다. 서버에서 가지고 있는 데이터로 교체해야 합니다.
       */
      setPositions([
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
      ]);
    });
  }, []);

  return (
    <>
      <Topbar.Icon type="star" />
      {listData.length ? (
        <S.Map ref={mapContainer}>
          <TreeList list={listData} type="saved" />
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

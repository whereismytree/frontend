import { useEffect, useState } from 'react';
import { ITreeItem } from 'types/apiResponse';
import treeJSON from 'assets/treedata.json';
import defaultMarkerImg from 'assets/tree_marker_default.svg';
import focusTreeMarkerImg from 'assets/tree_marker_focus.svg';
import useApiQuery from './useApiQuery';

const useFetchTreeData = (
  map: any,
  setTreeInfoData: React.Dispatch<React.SetStateAction<ITreeItem | null>>,
  setShowTreeInfo: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [url, setUrl] = useState<string>('');
  let selectedMarker: any = null;
  // TODO: 트리 조회 안됨. 백엔드 확인 요청 !!
  const { data } = useApiQuery<ITreeItem[]>(url);
  console.log('### url ###');
  console.log(url);
  console.log('#### data ####');
  console.log(data);

  const createMarker = (map: any, treeInfo: ITreeItem) => {
    const imageSrc = defaultMarkerImg;
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

  const setImageToMarker = (marker: any, imageSrc: string) => {
    const imageSize = new window.kakao.maps.Size(64, 69);
    const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);
    marker.setImage(markerImage);
  };

  const drawTree = async () => {
    if (!map) {
      return;
    }

    const bounds = map.getBounds();
    const swLatLng = bounds.getSouthWest();
    const neLatLng = bounds.getNorthEast();
    const topLeftLat: number = swLatLng.getLat();
    const topLeftLng: number = swLatLng.getLng();
    const topRightLat: number = neLatLng.getLat();
    const topRightLng: number = neLatLng.getLng();
    const bottomLeftLat: number = swLatLng.getLat();
    const bottomLeftLng: number = swLatLng.getLng();
    const bottomRightLat: number = neLatLng.getLat();
    const bottomRightLng: number = neLatLng.getLng();
    setUrl(
      `v1/trees/map?topLeftLat=${topLeftLat}&topLeftLng=${topLeftLng}&topRightLat=${topRightLat}&topRightLng=${topRightLng}&bottomLeftLat=${bottomLeftLat}&bottomLeftLng=${bottomLeftLng}&bottomRightLat=${bottomRightLat}&bottomRightLng=${bottomRightLng}`,
    );

    const treeMarkers = treeJSON.trees;
    if (treeMarkers) {
      treeMarkers.forEach((tree: ITreeItem) => {
        const marker = createMarker(map, tree);
        window.kakao.maps.event.addListener(marker, 'click', () => {
          if (selectedMarker === marker) {
            // 현재 클릭한 마커와 선택했던 마커가 같은 경우
            setImageToMarker(marker, defaultMarkerImg);
            selectedMarker = null;
            setShowTreeInfo(false);
          } else {
            // 현재 클릭한 마커와 선택했던 마커가 다른 경우
            if (selectedMarker && selectedMarker !== marker) {
              setImageToMarker(selectedMarker, defaultMarkerImg);
            }
            setImageToMarker(marker, focusTreeMarkerImg);
            selectedMarker = marker;
            setTreeInfoData(tree);
            setShowTreeInfo((prev) => (prev === false ? true : prev));
          }
        });
      });
    }
  };

  useEffect(() => {
    if (map) {
      drawTree();
    }
  }, [map]);

  return drawTree;
};

export default useFetchTreeData;

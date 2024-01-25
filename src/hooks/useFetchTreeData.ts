import { useEffect } from 'react';
import { ITreeItem } from 'types/apiResponse';
import treeJSON from 'assets/treedata.json';
import treeMarkerImg from 'assets/tree_marker_default.svg';
// import focusTreeMarkerImg from 'assets/tree_marker_focus.svg';
// import useApiQuery from './useApiQuery';

const useFetchTreeData = (map: any, handleTreeMarker: (tree: ITreeItem) => void) => {
  // TODO: api에 데이터가 없어 주석처리. 추후 수정 필요
  // const bounds = map.getBounds();
  // const swLatLng = bounds.getSouthWest();
  // const neLatLng = bounds.getNorthEast();
  // const topLeftLat: number = swLatLng.getLat();
  // const topLeftLng: number = swLatLng.getLng();
  // const topRightLat: number = neLatLng.getLat();
  // const topRightLng: number = swLatLng.getLng();
  // const bottomLeftLat: number = swLatLng.getLat();
  // const bottomLeftLng: number = neLatLng.getLng();
  // const bottomRightLat: number = neLatLng.getLat();
  // const bottomRightLng: number = neLatLng.getLng();
  // const url = `v1/trees/map?topLeftLat=${topLeftLat}&topLeftLng=${topLeftLng}&topRightLat=${topRightLat}&topRightLng=${topRightLng}&bottomLeftLat=${bottomLeftLat}&bottomLeftLng=${bottomLeftLng}&bottomRightLat=${bottomRightLat}&bottomRightLng=${bottomRightLng}`;
  // const { data } = useApiQuery<ITreeItem[]>(url);

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

  const drawTree = async () => {
    const treeMarkers = treeJSON.trees;
    if (treeMarkers) {
      treeMarkers.forEach((tree: ITreeItem) => {
        const marker = createMarker(map, tree);
        window.kakao.maps.event.addListener(marker, 'click', handleTreeMarker(tree));
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

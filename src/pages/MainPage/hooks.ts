import { useEffect, useState } from 'react';
import { IMapItem } from 'types/apiResponse';
import defaultMarkerImg from 'assets/tree_marker_default.svg';
import useUser from 'hooks/useUser';
import focusTreeMarkerImg from 'assets/tree_marker_focus.svg';
import useApiQuery from '../../hooks/useApiQuery';

const useFetchTreeData = (
  map: any,
  setTreeInfoData: React.Dispatch<React.SetStateAction<IMapItem | null>>,
  setShowTreeInfo: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [url, setUrl] = useState<string>('');
  const { data } = useApiQuery<{ trees: IMapItem[] }>(url);
  const { isLogin } = useUser();
  let selectedMarker: any = null;

  const createMarker = (map: any, treeInfo: IMapItem) => {
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
    // 북서쪽(Top Left) 좌표
    const topLeftLat = neLatLng.getLat();
    const topLeftLng = swLatLng.getLng();
    // 북동쪽(Top Right) 좌표
    const topRightLat = neLatLng.getLat();
    const topRightLng = neLatLng.getLng();
    // 남서쪽(Bottom Left) 좌표
    const bottomLeftLat = swLatLng.getLat();
    const bottomLeftLng = swLatLng.getLng();
    // 남동쪽(Bottom Right) 좌표
    const bottomRightLat = swLatLng.getLat();
    const bottomRightLng = neLatLng.getLng();
    setUrl(
      `v1/trees/map?topLeftLat=${topLeftLat}&topLeftLng=${topLeftLng}&topRightLat=${topRightLat}&topRightLng=${topRightLng}&bottomLeftLat=${bottomLeftLat}&bottomLeftLng=${bottomLeftLng}&bottomRightLat=${bottomRightLat}&bottomRightLng=${bottomRightLng}`,
    );

    const treeMarkers = data?.trees;
    if (treeMarkers) {
      treeMarkers.forEach((tree: IMapItem) => {
        const marker = createMarker(map, tree);
        window.kakao.maps.event.addListener(marker, 'click', () => {
          if (!isLogin) return;

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
  }, [map, data]);

  return drawTree;
};

export default useFetchTreeData;

import ITreeListApiResponse from 'types/TreeListApiResponse';

export type Positions = {
  name: string;
  latlng: any;
}[];

const formatTreeListToPostions = (treeList: ITreeListApiResponse['trees']): Positions => {
  return treeList.map(({ name, lat, lng }) => ({
    name,
    latlng: new window.kakao.maps.LatLng(lat, lng),
  }));
};

export default formatTreeListToPostions;

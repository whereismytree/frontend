export interface ITreeListItem {
  treeId: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  reviewsCount: number;
}

interface ITreeListApiResponse {
  trees: ITreeListItem[];
  totalTrees: number;
}

export default ITreeListApiResponse;

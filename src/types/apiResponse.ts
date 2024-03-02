export interface IMapItem {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export interface ITreeItem {
  treeId: number;
  name: string;
  lat: number;
  lng: number;
  addressType?: string;
  roadAddress: string;
  streetAddress: string;
  detailAddress?: string;
  exhibitionStartDate?: string;
  exhibitionEndDate?: string;
  spaceType?: string;
  businessDays?: string;
  isPet?: boolean;
  title: string;
  extraInfo?: string;
}

interface IImage {
  reviewId: number;
  imageUrl: string;
}

export interface IReviewImages {
  images: IImage[];
  totalImages: number;
}

interface IReview {
  reviewId: number;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  reviewImageUrl: string;
  content: string;
  tags: string[];
}

export interface IReviewList {
  reviews: IReview[];
  totalReviews: 0;
}

export interface IGetReview {
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  reviewImageUrl: string;
  content: string;
  tags: string[];
  canEdit: boolean;
  canRemove: boolean;
}

export interface IMainSearchResult {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  imageUrl: string;
}

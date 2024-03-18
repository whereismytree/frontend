import TAG, { TagId } from 'constants/tag';

export interface IReviewsAPIResponse {
  reviews: IReviewItem[];
  totalReviews: number;
}

export interface IReviewItem {
  tree: {
    treeId: number;
    treeName: string;
    address: string;
  };
  reviewId: number;
  createdAt: string;
  reviewImageUrl: string;
  content: string;
  tags: (typeof TAG)[TagId]['comment'][];
}

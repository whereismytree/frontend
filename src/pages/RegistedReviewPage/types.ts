import TAG, { TagId } from 'constants/tag';

export interface IReviewsAPIResponse {
  reviews: IReviewItem[];
  totalReviews: number;
}

export interface IReviewItem {
  reviewId: number;
  treeName: string;
  createdAt: string;
  reviewImageUrl: string;
  content: string;
  tags: (typeof TAG)[TagId]['comment'][];
}

import { HTTPError } from 'error/HTTPError';
import { MutateOptions } from '@tanstack/react-query';
import useApiMutation from './useApiMutation';
import useApiQuery from './useApiQuery';

interface ReviewResponse {
  nickname: string;
  createdAt: string;
  profileImageUrl: string;
  reviewImageUrl: string;
  content: string;
  tags: string[];
  canEdit: boolean;
  canRemove: boolean;
}

export const useReviewData = (reviewId: string) => {
  const { data, isError, isLoading } = useApiQuery<ReviewResponse>(`v1/reviews/${reviewId}`);

  if (isError) {
    throw new HTTPError('리뷰를 불러오는 데 오류가 발생했습니다.');
  }

  if (!isLoading && !data) {
    throw new HTTPError('리뷰 데이터를 받아오는 API 응답 값이 올바르지 않습니다.');
  }

  return data;
};

export const useDeleteReview = (reviewId: string) => {
  const { mutate, isError } = useApiMutation(`v1/reviews/${reviewId}`, 'DELETE');

  if (isError) {
    throw new HTTPError('리뷰를 삭제하던 중 오류가 발생했습니다.');
  }

  const deleteReview = (options: MutateOptions<unknown, unknown, unknown, unknown>) => {
    return mutate(null, options);
  };

  return deleteReview;
};

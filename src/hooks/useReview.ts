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

const useReview = (reviewId: string) => {
  const { data, isError: reviewError } = useApiQuery<ReviewResponse>(`v1/reviews/${reviewId}`);
  const { mutate, isError: reviewDeleteError } = useApiMutation(`v1/reviews/${reviewId}`, 'DELETE');

  if (reviewDeleteError) {
    throw new HTTPError('리뷰를 삭제하던 중 오류가 발생했습니다.');
  }

  if (reviewError) {
    throw new HTTPError('리뷰를 불러오는 데 오류가 발생했습니다.');
  }

  return {
    review: data,
    deleteReview: (options: MutateOptions<unknown, unknown, unknown, unknown>) =>
      mutate(null, options),
  };
};

export default useReview;

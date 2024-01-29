import { HttpError } from 'types/ErrorTypes';
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
  const { data, isError } = useApiQuery<ReviewResponse>(`v1/reviews/${reviewId}`);

  if (isError) throw new HttpError('리뷰를 불러오는 데 오류가 발생했습니다.');
  if (!data) throw new Error(`리뷰 데이터를 받아오는 API 응답값이 올바르지 않습니다. ${data}`);

  return data;
};

export const useReviewDelete = (reviewId: string) => {
  return useApiMutation(`v1/reviews/${reviewId}`, 'DELETE', {
    onSuccess: () => {
      // TODO: 리뷰를 삭제하는 요청이 성공적으로 완료 되었을 시 어떠한 경로로 라우팅 해주면 될 것 같아요.
    },
    onError: () => {
      throw new Error('리뷰를 삭제하던 중 오류가 발생했습니다.');
    },
  });
};

import useApiQuery from 'hooks/useApiQuery';
import { HTTPError } from 'error/HTTPError';
import { IReviewsAPIResponse } from './types';

const useReviews = () => {
  const { data, isError } = useApiQuery<IReviewsAPIResponse>('v1/my/reviews');

  if (isError) {
    throw new HTTPError('등록한 리뷰를 불러오던 중 오류가 발생했습니다.');
  }

  return data;
};

export default useReviews;

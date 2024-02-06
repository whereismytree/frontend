import useApiQuery from 'hooks/useApiQuery';
import { IReviewsAPIResponse } from './types';

const useReviews = () => {
  const { data } = useApiQuery<IReviewsAPIResponse>('v1/my/reviews');
  return data;
};

export default useReviews;

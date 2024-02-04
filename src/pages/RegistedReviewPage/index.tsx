import Navbar from 'components/Navbar';
import ReviewList from 'components/RegistReviewPage/ReviewList';
import Topbar from 'components/Topbar';
import Guide from 'components/common/Guide';
import useReviews from './hooks';
import * as S from './style';

function RegistReviewPage() {
  const reviewsData = useReviews();
  if (!reviewsData) return null;

  return (
    <>
      <Topbar.Icon type="cookie" />
      {reviewsData ? (
        <ReviewList reviews={reviewsData.reviews} />
      ) : (
        <S.Wrapper>
          <Guide text="등록한 리뷰가 없어요" />
        </S.Wrapper>
      )}

      <Navbar />
    </>
  );
}

export default RegistReviewPage;

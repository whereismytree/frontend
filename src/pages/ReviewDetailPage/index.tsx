import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Topbar from 'components/Topbar';
import ReviewProfile from 'pages/ReviewDetailPage/components/Profile';
import TreeItem from 'components/TreeItem';
import ReviewContent from 'pages/ReviewDetailPage/components/Review';
import parseTagCommentToID from 'utils/parseTagCommentToID';
import KebabDropDown from 'pages/ReviewDetailPage/components/KebabDropDown';
import useReview from 'hooks/useReview';
import { HTTPError } from 'error/HTTPError';
import getPath from 'utils/getPath';
import * as S from './style';
import ReviewImage from './components/ReviewImage';

function ReviewDetailPage() {
  const params = useParams();
  const { state: treeData } = useLocation();
  const navigate = useNavigate();
  const reviewId = validateReviewId(Number(params.reviewId));
  const { review, deleteReview } = useReview(reviewId);
  const { treeName, location } = validateTreeData(treeData);

  if (!review) return null;

  const {
    nickname,
    createdAt,
    content,
    profileImageUrl,
    tags,
    canEdit,
    canRemove,
    reviewImageUrl,
  } = review;

  const parseTags = tags.map((comment) => parseTagCommentToID(comment));

  const handleDelete = () => {
    deleteReview({
      onSuccess: () => navigate(-2),
    });
  };

  const handleEdit = () => {
    navigate(getPath('reviewPage', 'edit')(reviewId), {
      state: { treeName, location, type: 'edit' },
    });
  };

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Main>
        <TreeItem location={location}>{treeName}</TreeItem>
        <ReviewImage src={reviewImageUrl} />
        <ReviewProfile
          nickname={nickname}
          profileImageSrc={profileImageUrl}
          createDate={createdAt}
          canEdit={canEdit}
          canRemove={canRemove}
        >
          <KebabDropDown>
            <KebabDropDown.Toggle />
            <KebabDropDown.List>
              <KebabDropDown.Item onClick={handleEdit}>수정하기</KebabDropDown.Item>
              <KebabDropDown.Item onClick={handleDelete}>삭제하기</KebabDropDown.Item>
            </KebabDropDown.List>
          </KebabDropDown>
        </ReviewProfile>
        <ReviewContent content={content} tags={parseTags} />
      </S.Main>
    </>
  );
}

const validateTreeData = (treeData: { treeName: string; location: string } | null) => {
  if (!treeData || (treeData && (!treeData.treeName || !treeData.location))) {
    throw new HTTPError('올바르지 않은 접근입니다.', 404);
  }

  return treeData;
};

const validateReviewId = (reviewId: number | undefined) => {
  if (!reviewId || Number.isNaN(reviewId)) {
    throw new HTTPError('리뷰를 찾을 수 없습니다.', 404);
  }

  return reviewId;
};

export default ReviewDetailPage;

import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Topbar from 'components/Topbar';
import ReviewDetail from 'components/ReviewPage/ReviewDetail';
import { HttpError } from 'types/ErrorTypes';
import { ITreeItem } from 'types/apiResponse';
import { ReviewProvider } from './context';
import * as S from './style';
import ReviewImage from './components/ReviewImage';

const validateReviewId = (reviewId: number | undefined) => {
  if (!reviewId) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 PATH에 리뷰 아이디를 전달해주세요.');
  }

  if (Number.isNaN(reviewId)) {
    throw new Error('리뷰 상세 페이지에 전달된 리뷰 아이디가 숫자 데이터가 아닙니다.');
  }

  return reviewId;
};

const validateTreeData = (treeData: any) => {
  // TODO: treeData.location도 validate 및 반환 필요
  if (!treeData || !treeData.treeName || !treeData.image) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
  }

  return treeData as { treeName: string; image: string };
};

function ReviewDetailPage() {
  // TODO: 트리의 정보(트리 이름과 위치)와 리뷰에 대한 데이터를 받아오기 위해서 트리 아이디, 리뷰 아이디 두 개의 URI 파라미터가 필요합니다. 라우터 작성시 참고해주세요.
  const { treeId, reviewId } = useParams();
  const { data: reviewData, isError: isReviewError } = useApiQuery<ReviewResponse>(
    `v1/reviews/${reviewId}`,
  );
  const { data: treeData, isError: isTreeError } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

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

  const handleShare = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      renderSnackBar(2);
    } catch (err) {
      console.error('현재 URL을 클립보드에 복사하는 데 실패했습니다.');
    }
  };

  const handleEdit = () => {
    navigate(getPath('reviewPage', 'edit')(reviewId));
  };

  return (
    <ReviewProvider>
      <Topbar.Icon type="tree" />
      <SnackBar>URL이 클립보드에 복사되었습니다</SnackBar>
      <S.Main>
        <TreeInformation treeName={treeName} location={location} src={reviewData.reviewImageUrl} />
        <ReviewDetail
          nickname={nickname}
          profileImageSrc={profileImageUrl}
          createDate={createdAt}
          canEdit={canEdit}
          canRemove={canRemove}
        >
          <KebabDropDown>
            <KebabDropDown.Toggle />
            <KebabDropDown.List>
              <KebabDropDown.Item onClick={handleShare}>공유하기</KebabDropDown.Item>
              <KebabDropDown.Item onClick={handleEdit}>수정하기</KebabDropDown.Item>
              <KebabDropDown.Item onClick={handleDelete}>삭제하기</KebabDropDown.Item>
            </KebabDropDown.List>
          </KebabDropDown>
        </ReviewProfile>
        <ReviewContent content={content} tags={parseTags} />
      </S.Main>
    </ReviewProvider>
  );
}

export default ReviewDetailPage;

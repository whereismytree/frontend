import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Topbar from 'components/Topbar';
import ReviewProfile from 'pages/ReviewDetailPage/components/Profile';
import TreeItem from 'components/TreeItem';
import ReviewContent from 'pages/ReviewDetailPage/components/Review';
import parseTagCommentToID from 'utils/parseTagCommentToID';
import DropDown from 'pages/ReviewDetailPage/components/KebabDropDown';
import useReview from 'hooks/useReview';
import useSnackBar from 'hooks/useSnackBar';
import getPath from 'utils/getPath';
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
  if (!treeData) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
  }

  if (!treeData.treeName || !treeData.image) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
  }

  return treeData as { treeName: string; image: string };
};

function ReviewDetailPage() {
  const params = useParams();
  const { state: treeData } = useLocation();
  const navigate = useNavigate();
  const reviewId = validateReviewId(Number(params.reviewId));

  const { review, deleteReview } = useReview(reviewId);
  const { treeName } = validateTreeData(treeData);
  const { SnackBar, render: renderSnackBar } = useSnackBar();

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
    <>
      <Topbar.Icon type="tree" />
      <SnackBar>URL이 클립보드에 복사되었습니다</SnackBar>

      <S.Main>
        {/* TODO: 백엔드에서 리뷰 리스트에 트리 위치 데이터 함께 넘겨주면 location prop에 전달해주세요. */}

        <TreeItem location="">{treeName}</TreeItem>
        <ReviewImage src={reviewImageUrl} />
        <ReviewProfile
          nickname={nickname}
          profileImageSrc={profileImageUrl}
          createDate={createdAt}
          canEdit={canEdit}
          canRemove={canRemove}
        >
          <DropDown>
            <DropDown.Toggle />
            <DropDown.List>
              <DropDown.Item onClick={handleShare}>공유하기</DropDown.Item>
              <DropDown.Item onClick={handleEdit}>수정하기</DropDown.Item>
              <DropDown.Item onClick={handleDelete}>삭제하기</DropDown.Item>
            </DropDown.List>
          </DropDown>
        </ReviewProfile>
        <ReviewContent content={content} tags={parseTags} />
      </S.Main>
    </>
  );
}

export default ReviewDetailPage;

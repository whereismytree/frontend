import React from 'react';
import { useParams } from 'react-router-dom';
import TreeInformation from 'components/ReviewPage/TreeInformation';
import Topbar from 'components/Topbar';
import { useTreeData } from 'hooks/treeHooks';
import { useDeleteReview, useReviewData } from 'hooks/reviewHooks';
import ReviewProfile from 'components/ReviewPage/ReviewProfile';
import ReviewContent from 'components/ReviewPage/ReviewContent';
import parseTagCommentToID from 'utils/parseTagCommentToID';
import DropDown from 'components/ReviewPage/ReviewProfile/DropDown';
import SnackBar from 'components/SnackBar';
import { useDispatch } from 'react-redux';
import { setSnackBarView } from 'store/modules/toggleSlice';
import * as S from './style';

const validateParamData = (data: string | undefined) => {
  if (!data) {
    throw new Error('URL 식별자 데이터가 존재하지 않습니다.');
  }

  return data;
};

function ReviewDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const treeId = validateParamData(params.treeId);
  const reviewId = validateParamData(params.reviewId);

  const treeData = useTreeData(treeId);
  const reviewData = useReviewData(reviewId);
  const deleteReview = useDeleteReview(reviewId);

  if (!reviewData || !treeData) return null;

  const {
    nickname,
    createdAt,
    content,
    profileImageUrl,
    tags,
    canEdit,
    canRemove,
    reviewImageUrl,
  } = reviewData;
  const { name: treeName, addressType, roadAddress, streetAddress } = treeData;
  const parseTags = tags.map((comment) => parseTagCommentToID(comment));
  const location = addressType === 'ROAD' ? roadAddress : streetAddress;

  const viewSnackBar = () => {
    dispatch(setSnackBarView(true));
  };

  const handleDelete = () => {
    deleteReview({
      onSuccess: () => {
        // TODO: path 상수 작성 후 적용
      },
    });
  };

  const handleShare = async () => {
    const currentUrl = window.location.href;

    try {
      await navigator.clipboard.writeText(currentUrl);
      viewSnackBar();
    } catch (err) {
      console.error('현재 URL을 클립보드에 복사하는 데 실패했습니다.');
    }
  };

  const handleEdit = () => {
    // TODO: path 상수 작성 후 적용
  };

  return (
    <>
      <Topbar.Icon type="tree" />
      <SnackBar during={3000}>URL이 클립보드에 복사되었습니다</SnackBar>
      <S.Main>
        <TreeInformation treeName={treeName} location={location} src={reviewImageUrl} />
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
              <DropDown.Item onClick={() => handleShare()}>공유하기</DropDown.Item>
              <DropDown.Item onClick={() => handleEdit()}>수정하기</DropDown.Item>
              <DropDown.Item onClick={() => handleDelete()}>삭제하기</DropDown.Item>
            </DropDown.List>
          </DropDown>
        </ReviewProfile>
        <ReviewContent content={content} tags={parseTags} />
      </S.Main>
    </>
  );
}

export default ReviewDetailPage;

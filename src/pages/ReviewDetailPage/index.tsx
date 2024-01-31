import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TreeInformation from 'components/ReviewPage/TreeInformation';
import Topbar from 'components/Topbar';
import { useTreeData } from 'hooks/treeHooks';
import ReviewProfile from 'components/ReviewPage/ReviewProfile';
import { useDeleteReview, useReviewData } from 'hooks/reviewHooks';
import ReviewContent from 'components/ReviewPage/ReviewContent';
import parseCommentToTagID from 'utils/parseCommentToTagID';
import DropDown from 'components/ReviewPage/ReviewProfile/DropDown';
import { ReviewProvider } from './context';
import * as S from './style';

function CopyAlert({ view }: { view: boolean }) {
  return <S.Alert $view={view}>클립보드에 복사되었습니다.</S.Alert>;
}

function ReviewDetailPage() {
  const { treeId, reviewId } = useParams();
  const [copyed, setCopyed] = useState(false);

  if (!treeId || !reviewId) {
    throw new Error('URL 식별자에 트리 아이디와 리뷰 아이디가 포함되어야 합니다.');
  }

  useEffect(() => {
    if (copyed) {
      setTimeout(() => {
        setCopyed(false);
      }, S.ALERT_ANIMATION_TIME);
    }
  }, [copyed]);

  const deleteReview = useDeleteReview(reviewId);
  const reviewData = useReviewData(reviewId);
  const treeData = useTreeData(treeId);

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
  const parseTags = tags.map((comment) => parseCommentToTagID(comment));
  const location = addressType === 'ROAD' ? roadAddress : streetAddress;

  const handleDelete = () => {
    deleteReview({
      onSuccess: () => {
        // TODO: path 상수 작성 후 적용
      },
    });
  };

  const handleShare = async () => {
    setCopyed(true);
  };

  const handleEdit = () => {
    // TODO: path 상수 작성 후 적용
  };

  return (
    <ReviewProvider>
      <CopyAlert view={copyed} />
      <Topbar.Icon type="tree" />
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
    </ReviewProvider>
  );
}

export default ReviewDetailPage;

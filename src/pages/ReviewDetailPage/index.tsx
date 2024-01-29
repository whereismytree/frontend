import { useParams } from 'react-router-dom';
import TreeInformation from 'components/ReviewPage/TreeInformation';
import Topbar from 'components/Topbar';
import ReviewDetail from 'components/ReviewPage/ReviewDetail';
import { useTreeData } from 'hooks/treeHooks';
import { useReviewData, useReviewDelete } from 'hooks/reviewHooks';
import { ReviewProvider } from './context';
import * as S from './style';

function ReviewDetailPage() {
  const { treeId, reviewId } = useParams();

  if (!treeId || !reviewId) {
    throw new Error('URL 식별자에 트리 아이디와 리뷰 아이디가 포함되어야 합니다.');
  }

  const {
    nickname,
    createdAt,
    content,
    profileImageUrl,
    tags,
    canEdit,
    canRemove,
    reviewImageUrl,
  } = useReviewData(reviewId);
  const { name: treeName, addressType, roadAddress, streetAddress } = useTreeData(treeId);
  const { mutate: reviewDelete } = useReviewDelete(reviewId);
  const location = addressType === 'ROAD' ? roadAddress : streetAddress;

  const handleDelete = () => {};

  return (
    <ReviewProvider>
      <Topbar.Icon type="tree" />
      <SnackBar>URL이 클립보드에 복사되었습니다</SnackBar>
      <S.Main>
        <TreeInformation treeName={treeName} location={location} src={reviewImageUrl} />
        <ReviewDetail
          nickname={nickname}
          profileImageSrc={profileImageUrl}
          createDate={createdAt}
          canEdit={canEdit}
          canRemove={canRemove}
          onDelete={handleDelete}
        />
      </S.Main>
    </ReviewProvider>
  );
}

export default ReviewDetailPage;

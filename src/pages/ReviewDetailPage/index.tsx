import { useParams } from 'react-router-dom';
import useApiQuery from 'hooks/useApiQuery';
import TreeInformation from 'components/ReviewPage/TreeInformation';
import Topbar from 'components/Topbar';
import ReviewDetail from 'components/ReviewPage/ReviewDetail';
import { HttpError } from 'types/ErrorTypes';
import { ITreeItem } from 'types/apiResponse';
import * as S from './style';

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

function ReviewDetailPage() {
  // TODO: 트리 아이디, 리뷰 아이디 두 개의 URI 파라미터가 필요합니다.
  const { treeId, reviewId } = useParams();
  const { data: reviewData, isError: isReviewError } = useApiQuery<ReviewResponse>(
    `v1/reviews/${reviewId}`,
  );
  const { data: treeData, isError: isTreeError } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  if (isReviewError) throw new HttpError('리뷰를 불러오는 데 오류가 발생했습니다.');
  if (isTreeError) throw new HttpError('트리를 불러오는 데 오류가 발생했습니다.');
  if (!reviewData || !treeData) return null;

  const { name: treeName, addressType, roadAddress, streetAddress } = treeData;
  const location = addressType === 'ROAD' ? roadAddress : streetAddress;
  const { nickname, createdAt, content, profileImageUrl, tags, canEdit, canRemove } = reviewData;

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Main>
        <TreeInformation treeName={treeName} location={location} src={reviewData.reviewImageUrl} />
        <ReviewDetail
          nickname={nickname}
          createdAt={createdAt}
          reviewText={content}
          profileImageSrc={profileImageUrl}
          tags={tags}
          canEdit={canEdit}
          canRemove={canRemove}
        />
      </S.Main>
    </>
  );
}

export default ReviewDetailPage;

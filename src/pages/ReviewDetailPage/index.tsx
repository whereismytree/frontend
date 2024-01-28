import { useParams } from 'react-router-dom';
import useApiQuery from 'hooks/useApiQuery';
import TreeInformation from 'components/ReviewPage/TreeInformation';
import Topbar from 'components/Topbar';
import ReviewDetail from 'components/ReviewPage/ReviewDetail';
import { HttpError } from 'types/ErrorTypes';
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
  const { treeId } = useParams();
  const { data, isError } = useApiQuery<ReviewResponse>(`v1/reviews/${treeId}`);

  if (isError) {
    throw new HttpError('리뷰를 불러오는 데 오류가 발생했습니다.');
  }

  if (!data) return null;

  const { nickname, createdAt, content, profileImageUrl, tags, canEdit, canRemove } = data;

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Main>
        <TreeInformation treeName="" location="" src={data.reviewImageUrl} />
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

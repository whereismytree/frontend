import { Link } from 'react-router-dom';
import Item from 'components/common/Item';
import Tag from 'components/common/tag';
import parseTagCommentToID from 'utils/parseTagCommentToID';
import { IReviewItem } from 'pages/MyReviewPage/types';
import ListTitle from 'components/common/ListTitle';
import getPath from 'utils/getPath';
import * as S from './style';

function ReviewItem({
  treeName,
  content,
  tags,
  image,
}: {
  treeName: string;
  content: string;
  tags: string[];
  image: string;
}) {
  return (
    <>
      <S.FlexBox>
        <S.ReviewSection>
          <Item.Title image>{treeName}</Item.Title>
          <S.Review>{content}</S.Review>
        </S.ReviewSection>
        <S.Image src={image} alt="트리 이미지" />
      </S.FlexBox>
      {tags[0] && <Tag id={parseTagCommentToID(tags[0])} />}
      {tags.length > 2 && <S.AdditionalTags>+ {tags.length - 1}</S.AdditionalTags>}
    </>
  );
}

function ReviewList({ reviews }: { reviews: IReviewItem[] }) {
  return (
    <S.ReviewList>
      <S.ReviewListTitleSection>
        <ListTitle count={reviews.length}>내가 쓴 후기</ListTitle>
      </S.ReviewListTitleSection>
      {reviews.map((review) => {
        const {
          tree: { treeName, address },
          reviewId,
          reviewImageUrl,
          content,
          tags,
        } = review;

        return (
          <S.ListItem key={reviewId}>
            <Link
              to={getPath('reviewPage', 'detail')(reviewId)}
              state={{ treeName, location: address }}
            >
              <ReviewItem
                image={reviewImageUrl}
                treeName={treeName}
                content={content}
                tags={tags}
              />
            </Link>
          </S.ListItem>
        );
      })}
    </S.ReviewList>
  );
}

export default ReviewList;

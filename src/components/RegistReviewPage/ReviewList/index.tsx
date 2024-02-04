import Item from 'components/common/Item';
import Tag from 'components/common/tag';
import parseTagCommentToID from 'utils/parseTagCommentToID';
import { IReviewItem } from 'pages/RegistedReviewPage';
import ListTitle from 'components/common/ListTitle';
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
      <S.AdditionalTags>{tags.length > 2 && `+ ${tags.length - 1}`}</S.AdditionalTags>
    </>
  );
}

function ReviewList({ reviews }: { reviews: IReviewItem[] }) {
  return (
    <S.ReviewList>
      <S.ReviewListTitleSection>
        <ListTitle count={reviews.length}>내가 쓴 후기</ListTitle>
      </S.ReviewListTitleSection>
      {reviews.map((review) => (
        <S.ListItem key={review.reviewId}>
          <ReviewItem
            image={review.reviewImageUrl}
            treeName={review.treeName}
            content={review.content}
            tags={review.tags}
          />
        </S.ListItem>
      ))}
    </S.ReviewList>
  );
}

export default ReviewList;
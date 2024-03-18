import Tag from 'components/common/tag';
import TAG from 'constants/tag';
import * as S from './style';

function Review({ content, tags }: { content: string; tags: (typeof TAG)[number]['id'][] }) {
  return (
    <>
      <S.ReviewText>{content}</S.ReviewText>
      <S.Tags>
        {tags.map((tag) => (
          <Tag id={tag} key={tag} />
        ))}
      </S.Tags>
    </>
  );
}

export default Review;

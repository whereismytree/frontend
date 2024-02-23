import TAG, { TagId } from 'constants/tag';
import * as S from './style';

function Tag({ id }: { id: TagId }) {
  const { image, comment } = TAG[id - 1];
  return (
    <S.Wrapper>
      <S.TagImg src={image} alt={comment} />
      <S.Text>{comment}</S.Text>
    </S.Wrapper>
  );
}

export default Tag;

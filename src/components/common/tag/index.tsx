import TAG, { TagId } from 'constants/tag';
import * as S from './style';

function Tag({ id }: { id: TagId }) {
  const { image, comment } = TAG[id - 1];
  return (
    <S.Tag>
      <S.TagImg src={image} alt={comment} />
      {comment}
    </S.Tag>
  );
}

export default Tag;

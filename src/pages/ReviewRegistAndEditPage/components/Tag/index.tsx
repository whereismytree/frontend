import TAG, { TagId } from 'constants/tag';
import * as S from './style';

interface TagProp {
  id: TagId;
  isSelected: boolean;
  onClick: (e: any) => void;
}
function Tag({ id, isSelected, onClick }: TagProp) {
  const { image, comment } = TAG[id - 1];
  return (
    <S.Wrapper isselected={isSelected} onClick={onClick}>
      <S.TagImg src={image} alt={comment} />
      <S.Text isselected={isSelected}>{comment}</S.Text>
    </S.Wrapper>
  );
}

export default Tag;

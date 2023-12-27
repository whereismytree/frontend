import Item from 'components/common/Item';
import IItemProps from 'types/ItemProps';

interface ITreeReviewItemProps extends IItemProps {
  reviewCount: number;
}

function TreeReviewItem({ children, location, reviewCount }: ITreeReviewItemProps) {
  return (
    <Item gap={0.8}>
      <Item.Title image>{children}</Item.Title>
      <Item.SubTitle reviewCount={reviewCount}>{location}</Item.SubTitle>
    </Item>
  );
}

export default TreeReviewItem;

import Item from 'components/common/Item';
import IItemProps from 'types/ItemProps';

function TreeItem({ children, location }: IItemProps) {
  return (
    <Item>
      <Item.Title>{children}</Item.Title>
      <Item.SubTitle weight={400}>{location}</Item.SubTitle>
    </Item>
  );
}

export default TreeItem;

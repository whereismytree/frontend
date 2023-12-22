import Item from 'components/common/Item';
import IItemProps from 'types/ItemProps';

function TreeImageItem({ children, location }: IItemProps) {
  return (
    <Item.Tree>
      <Item.Title size={1.4} weight={700}>
        {children}
      </Item.Title>
      <Item.SubTitle weight={350}>{location}</Item.SubTitle>
    </Item.Tree>
  );
}
export default TreeImageItem;

import Item from 'components/common/Item';
import IItemProps from 'types/ItemProps';
import { RightLineSpan } from 'components/common/Item/style';
import { StyleLocationText } from './style';

interface ILocationProps extends IItemProps {
  distance: number;
}

function TreeLocationItem({ children, location, distance }: ILocationProps) {
  return (
    <Item gap={0.8}>
      <Item.Title size={2.4}>{children}</Item.Title>
      <StyleLocationText>
        <RightLineSpan style={{ display: 'none' }}>
          {new Intl.NumberFormat().format(distance)}m
        </RightLineSpan>
        {location}
      </StyleLocationText>
    </Item>
  );
}

export default TreeLocationItem;

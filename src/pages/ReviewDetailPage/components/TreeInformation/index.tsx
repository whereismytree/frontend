import Item from 'components/common/Item';

function TreeInformation({ treeName, location }: { treeName: string; location: string }) {
  return (
    <Item>
      <Item.Title>{treeName}</Item.Title>
      <Item.SubTitle>{location}</Item.SubTitle>
    </Item>
  );
}

export default TreeInformation;

import Item from 'components/common/Item';
import AddressType from 'components/common/AddressType';
import ADDRESS_TYPES from 'constants/addressTypes';
import * as S from './style';

function TreeLocation({
  location,
  address,
  addressType,
}: {
  location: string;
  address: string;
  addressType: keyof typeof ADDRESS_TYPES;
}) {
  return (
    <Item gap={0.7}>
      <Item.Title size={1.6} weight={500}>
        {location ?? ''}
      </Item.Title>
      <S.Address>
        <AddressType type={addressType} />
        {address}
      </S.Address>
    </Item>
  );
}

export default TreeLocation;

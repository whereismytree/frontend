import React, { ReactNode } from 'react';
import Item from 'components/common/Item';
import { useDispatch } from 'react-redux';
import ISearchPlaceData from 'types/SearchPlaceData';
import { setAddressType, setLatitude, setLongitude } from 'store/modules/treeRegistLocationSlice';
import { Link } from 'react-router-dom';
import * as S from './style';

function SearchListItem({ data }: { data: ISearchPlaceData }) {
  const dispatch = useDispatch();
  const addressName = data.road_address_name || data.address_name;

  const setRegistLocation = () => {
    const addressType = data.road_address_name ? 'ROAD' : 'STREET';

    dispatch(setLongitude(Number(data.x)));
    dispatch(setLatitude(Number(data.y)));
    dispatch(setAddressType(addressType));
  };

  return (
    <S.ResultListItem onClick={() => setRegistLocation()}>
      <Link to="../map">
        <Item.Title size={1.4} weight={400}>
          {data.place_name}
        </Item.Title>
        <S.ResultItemAddress>
          <S.AddressType>{data.road_address_name ? '도로명' : '지번'}</S.AddressType>
          {addressName}
        </S.ResultItemAddress>
      </Link>
    </S.ResultListItem>
  );
}

function SearchResultList({ children }: { children: ReactNode }) {
  return <S.SearchResult>{children}</S.SearchResult>;
}

const SearchResult = {
  List: SearchResultList,
  Item: SearchListItem,
};

export default SearchResult;

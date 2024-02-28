import React from 'react';
import Item from 'components/common/Item';
import { Link } from 'react-router-dom';
import getPath from 'utils/getPath';
import ADDRESS_TYPE from 'constants/addressTypes';
import AddressType from 'components/common/AddressType';
import usePlaceSearch from '../../hooks';
import * as S from './style';

function SearchTip() {
  return (
    <S.SearchTip>
      <strong>검색 Tip!</strong>
      <span>
        트리가 실내에 있는 경우,
        <br /> 건물이나 상호명으로 검색해 보세요!
      </span>
      <span>예) OO백화점, OO카페</span>
    </S.SearchTip>
  );
}

function SearchListItem({
  location,
  address,
  addressType,
  latlng,
}: {
  location: string;
  address: string;
  addressType: keyof typeof ADDRESS_TYPE;
  latlng: { lat: number; lng: number };
}) {
  return (
    <S.ResultListItem>
      <Link to={getPath('treePage', 'regist', 'map')} state={latlng}>
        <Item.Title size={1.4} weight={400}>
          {location}
        </Item.Title>
        <S.ResultItemAddress>
          <AddressType type={addressType} />
          {address}
        </S.ResultItemAddress>
      </Link>
    </S.ResultListItem>
  );
}

function SearchResult({ keyword }: { keyword: string }) {
  const searchResult = usePlaceSearch(keyword);

  return keyword && searchResult.length ? (
    <S.SearchResult>
      {searchResult.map((result) => {
        const addressType = result.road_address_name ? 'ROAD' : 'STREET';
        const address = result.road_address_name || result.address_name;
        const latlng = { lat: Number(result.y), lng: Number(result.x) };

        return (
          <SearchListItem
            key={result.id}
            location={result.place_name}
            address={address}
            addressType={addressType}
            latlng={latlng}
          />
        );
      })}
    </S.SearchResult>
  ) : (
    <SearchTip />
  );
}

export default React.memo(SearchResult);

import React from 'react';
import Item from 'components/common/Item';
import { useSelector } from 'react-redux';
import ISearchPlaceData from 'types/SearchPlaceData';
import usePlaceSearch from 'hooks/usePlaceSearch';
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

function SearchListItem({ data }: { data: ISearchPlaceData }) {
  return (
    <S.ResultListItem>
      <Item.Title size={1.4} weight={400}>
        {data.place_name}
      </Item.Title>
      <S.ResultItemAddress>
        <S.AddressType>{data.road_address_name ? '도로명' : '지번'}</S.AddressType>
        {data.road_address_name || data.address_name}
      </S.ResultItemAddress>
    </S.ResultListItem>
  );
}

function SearchResultList({ result }: { result: ISearchPlaceData[] }) {
  return (
    <S.SearchResult>
      {result.map((data: ISearchPlaceData) => {
        return <SearchListItem key={data.id} data={data} />;
      })}
    </S.SearchResult>
  );
}

function Search() {
  const { keyword } = useSelector(({ search }) => search);
  const result = usePlaceSearch(keyword);
  const isHaveResult = keyword && result && result.length > 0;

  return isHaveResult ? <SearchResultList result={result} /> : <SearchTip />;
}

export default Search;

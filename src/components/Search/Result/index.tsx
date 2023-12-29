import Item from 'components/common/Item';
import { useSelector } from 'react-redux';
import ISearchPlaceData from 'types/SearchPlaceData';
import usePlaceSearch from 'hooks/usePlaceSearch';
import * as S from './style';

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

function SearchResultList() {
  const { keyword } = useSelector(({ search }) => search);
  const result = usePlaceSearch(keyword);

  return (
    keyword &&
    result &&
    result.length > 0 && (
      <S.SearchResult>
        {result.map((data: ISearchPlaceData) => {
          return <SearchListItem key={data.id} data={data} />;
        })}
      </S.SearchResult>
    )
  );
}

export default SearchResultList;

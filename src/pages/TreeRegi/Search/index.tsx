import Search from 'components/TreeRegi/Location/Search';
import usePlaceSearch from 'hooks/usePlaceSearch';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

function SearchLocation() {
  const searchKeyword = useSelector((state: TRootState) => state.location.searchKeyword);
  const searchResult = usePlaceSearch(searchKeyword);

  return (
    <Search>
      <Search.Header>
        <Search.Input />
        <Search.CurrentLocationButton />
      </Search.Header>
      {searchKeyword && searchResult && searchResult.length ? (
        <Search.ResultList>
          {searchResult.map((searchItem) => (
            <Search.ResultItem key={searchItem.id} data={searchItem} />
          ))}
        </Search.ResultList>
      ) : (
        <Search.Tip />
      )}
    </Search>
  );
}

export default SearchLocation;

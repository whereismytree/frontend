import Search from 'pages/TreeRegistPage/Search/components';
import usePlaceSearch from 'hooks/usePlaceSearch';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';
import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';

function SearchLocation() {
  const searchKeyword = useSelector((state: TRootState) => state.location.searchKeyword);
  const searchResult = usePlaceSearch(searchKeyword);

  return (
    <>
      <Topbar.Icon type="candy" />
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
      <Navbar />
    </>
  );
}

export default SearchLocation;

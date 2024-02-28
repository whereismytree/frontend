import Topbar from 'components/Topbar';
import Navbar from 'components/Navbar';
import SearchResult from './components/SearchResult';
import SearchInput from './components/Input';
import * as S from './style';

function SearchLocation() {
  return (
    <>
      <Topbar.Icon type="candy" />
      <S.Wrapper>
        <SearchInput render={(keyword) => <SearchResult keyword={keyword} />} />
      </S.Wrapper>
      <Navbar />
    </>
  );
}

export default SearchLocation;

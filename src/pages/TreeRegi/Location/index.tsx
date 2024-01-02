import TreeRegistMap from 'components/TreeRegi/Location/Map';
import Search from 'components/TreeRegi';

function SearchPlace() {
  return (
    <Search>
      <Search.Header>
        <Search.Input />
        <Search.CurrentLocationButton />
      </Search.Header>
      <Search.Result />
    </Search>
  );
}

function TreeRegist() {
  // const { address, addressType, latitude, longitude } = useSelector(({ location }) => location);

  return (
    <TreeRegistMap>
      <TreeRegistMap.LocationInfo>
        <TreeRegistMap.LocationTypeButton />
        <TreeRegistMap.RegistButton />
      </TreeRegistMap.LocationInfo>
    </TreeRegistMap>
  );
}

function Location() {
  return <TreeRegist /> || <SearchPlace />;
}

export default Location;

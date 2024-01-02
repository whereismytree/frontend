import TreeRegistMap from 'components/TreeRegi/Location/Map';

function Map() {
  // const { address, addressType, latitude, longitude } = useSelector(({ location }) => location);

  return (
    <>
      <TreeRegistMap />
      <TreeRegistMap.LocationInfo>
        <TreeRegistMap.LocationTypeButton />
        <TreeRegistMap.RegistButton />
      </TreeRegistMap.LocationInfo>
    </>
  );
}

export default Map;

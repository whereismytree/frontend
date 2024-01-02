import TreeRegistMap from 'components/TreeRegi/Location/Map';

function RegistMap() {
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

export default RegistMap;

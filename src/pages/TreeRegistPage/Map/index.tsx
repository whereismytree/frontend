import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import TreeRegistMap from 'pages/TreeRegistPage/Map/components';

function RegistMap() {
  return (
    <>
      <Topbar.Icon type="candy" />
      <TreeRegistMap />
      <TreeRegistMap.LocationInfo>
        <TreeRegistMap.LocationTypeButton />
        <TreeRegistMap.RegistButton />
      </TreeRegistMap.LocationInfo>
      <Navbar />
    </>
  );
}

export default RegistMap;

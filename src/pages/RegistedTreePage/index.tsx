import Navbar from 'components/Navbar';
import RegistedTreeMap from 'components/RegistedTreePage';
import Topbar from 'components/Topbar';

const RegistedTreePage = () => {
  return (
    <>
      <Topbar.Icon type="cookie" />
      <RegistedTreeMap />
      <Navbar />
    </>
  );
};

export default RegistedTreePage;

import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import TreeRegiForm from 'pages/TreeRegistPage/Form/components';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { TRootState } from 'store';

function TreeRegiDetail() {
  const {
    latitude,
    longitude,
    address: { road, street },
  } = useSelector((state: TRootState) => state.location);
  const methods = useForm({ mode: 'onBlur' });

  useEffect(() => {
    console.log(latitude, longitude);
    if (!(latitude && longitude) || !(road || street)) {
      // TODO: 만약 사용자가 트리를 심으려고 지정한 위치 상태가 falsy 값이라면, 404 페이지로 라우팅 하는 로직 작성
      console.log('error!');
    }
  }, [latitude, longitude, road, street]);

  return (
    <FormProvider {...methods}>
      <Topbar.Icon type="candy" />
      <TreeRegiForm>
        <TreeRegiForm.LocationDetail />
        <TreeRegiForm.Information />
      </TreeRegiForm>
      <Navbar />
    </FormProvider>
  );
}

export default TreeRegiDetail;

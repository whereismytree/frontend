import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import isEmptyObject from 'utils/isEmptyObject';
import LocationPickerMap from './components/Map';
import AddressInfo from './components/AddressInfo';

function RegistMap() {
  const { state } = useLocation();
  const latLng = validateLatLng(state);

  return (
    <>
      <Topbar.Icon type="candy" />
      <LocationPickerMap initialLatLng={latLng}>
        {(latLng) => <AddressInfo latLng={latLng} />}
      </LocationPickerMap>
      <Navbar />
    </>
  );
}

const validateLatLng = (LatLng: { lat: number; lng: number }) => {
  if (!LatLng || isEmptyObject(LatLng)) {
    throw new Error('올바르지 않은 접근입니다.');
  }

  if (typeof LatLng.lat === 'undefined' || typeof LatLng.lng === 'undefined') {
    throw new Error('올바른 key로 위도 경도를 전달해주세요. ex) {lat: number, lat: number}');
  }

  return LatLng;
};

export default RegistMap;

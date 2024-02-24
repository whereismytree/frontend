import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Topbar from 'components/Topbar';
import TreeLocation from './components/Map';
import TreeRegistMapProvider from './provider';
import * as S from './style';
import AddressInfo from './components/AddressInfo';
import SubmitButton from './components/SubmitButton';

const validateLatLng = (LatLng: { lat: number; lng: number }) => {
  const isEmptyObject = (obj: object) => Object.keys(obj).length === 0;

  if (!LatLng || isEmptyObject(LatLng)) {
    throw new Error('올바르지 않은 접근입니다.');
  }

  if (typeof LatLng.lat === 'undefined' || typeof LatLng.lng === 'undefined') {
    throw new Error('올바른 key로 위도 경도를 전달해주세요. ex) {lat: number, lat: number}');
  }

  return LatLng;
};

function RegistMap() {
  const { state } = useLocation();
  const latLng = validateLatLng(state);

  return (
    <>
      <Topbar.Icon type="candy" />
      <TreeRegistMapProvider>
        <TreeLocation initialLatLng={latLng} />
        <S.AddressInfo>
          <AddressInfo />
          <SubmitButton />
        </S.AddressInfo>
      </TreeRegistMapProvider>
      <Navbar />
    </>
  );
}

export default RegistMap;

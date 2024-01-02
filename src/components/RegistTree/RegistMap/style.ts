import styled from 'styled-components';
import exchangeArrow from 'assets/exchange-arrow.svg';

const LocationInfoHeight = 204;

export const MapContainer = styled.div`
  position: relative;
  height: calc(100vh - (var(--navbar-height) + var(--header-height)));

  img {
    position: absolute;
    z-index: 100;
    right: 12px;
    bottom: calc(3vh + ${LocationInfoHeight}px);
  }
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-height: ${LocationInfoHeight}px;
  padding: 30px 25px;
  position: absolute;
  bottom: 0;
  background-color: var(--main-white);
  z-index: 100;
  border-radius: 10px 10px 0 0;
  box-shadow: 1px -1px 5px var(--grey-medium);
  border-bottom: 1px solid black;
`;

export const LocationTypeButton = styled.button`
  width: fit-content;
  color: var(--grey-dark);
  background-color: var(--grey-light);
  border-radius: 20px;
  padding: 2px 10px;

  &::before {
    content: url(${exchangeArrow});
    margin-right: 3.5px;
  }
`;

import exchangeArrow from 'assets/exchange-arrow.svg';
import styled from 'styled-components';

export const Address = styled.p`
  font-size: 2rem;
  font-weight: 800;
  flex-grow: 1;
`;

export const AddressTypeButton = styled.button`
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

export const LOCATION_INFO_HEIGHT = 204;

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  height: ${LOCATION_INFO_HEIGHT}px;
  padding: 30px 25px;
  background-color: var(--main-white);
  border-radius: 10px 10px 0 0;
  box-shadow: 1px -1px 5px var(--grey-medium);
`;

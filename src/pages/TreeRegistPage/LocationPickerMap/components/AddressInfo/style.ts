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

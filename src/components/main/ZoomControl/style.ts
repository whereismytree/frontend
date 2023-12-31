import styled from 'styled-components';

export const ZoomControl = styled.div`
  cursor: pointer;
  z-index: 10;
  position: absolute;
  right: 1.6rem;
  bottom: calc(1.2rem);
  /* bottom: calc(21.6rem + 1.2rem); */
  margin-bottom: 1.2rem;
  box-shadow: 0 7px 5px 5px rgba(0, 0, 0, 0.07);
  :first-child {
    display: block;
  }
`;

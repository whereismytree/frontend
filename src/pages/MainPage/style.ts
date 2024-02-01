import styled from 'styled-components';

export const Map = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: calc(100vh - var(--navbar-height));
`;

export const MapButtons = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1.6rem;
`;

export const Loading = styled.section`
  height: calc(100vh - var(--navbar-height));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

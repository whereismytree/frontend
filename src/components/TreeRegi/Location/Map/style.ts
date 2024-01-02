import styled from 'styled-components';

export const MapContainer = styled.div`
  position: relative;
  height: calc(100vh - (var(--navbar-height) + var(--header-height)));

  img {
    position: absolute;
    z-index: 100;
    right: 12px;
    bottom: calc(3vh + 204px);
  }
`;

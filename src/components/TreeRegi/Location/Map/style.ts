import styled from 'styled-components';
import { LOCATION_INFO_HEIGHT } from './LocationInfo/style';

export const MapContainer = styled.div`
  position: relative;
  height: calc(100vh - (var(--navbar-height) + var(--header-height) + ${LOCATION_INFO_HEIGHT}px));

  img {
    position: absolute;
    z-index: 100;
    right: 12px;
    bottom: calc(3vh);
  }
`;

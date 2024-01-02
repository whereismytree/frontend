import styled from 'styled-components';
import treeMarker from 'assets/tree_marker.svg';
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

export const Overlay = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;
  color: var(--main-white);
  padding: 10px 25px 8px;
  border-radius: 20px;
  width: fit-content;
  background-color: var(--main-green);
  position: absolute;
  z-index: 100;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 100%;

    border-top: 10px solid var(--main-green);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 0px solid transparent;
  }

  &::before {
    content: url(${treeMarker});
    position: absolute;
    height: 50px;
    aspect-ratio: 1/1;
    top: 220%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

import styled from 'styled-components';
import marker from 'assets/tree_marker.svg';
import { LOCATION_INFO_HEIGHT } from '../AddressInfo/style';

export const MapContainer = styled.div`
  position: relative;
  height: calc(100vh - (var(--navbar-height) + var(--header-height) + ${LOCATION_INFO_HEIGHT}px));

  img[alt='현재 위치'] {
    position: absolute;
    z-index: 100;
    right: 12px;
    bottom: calc(3vh);
  }
`;

export const Overlay = styled.div`
  height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::after {
    content: url(${marker});
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const overlayTooltipBorderWidth = '2px';

export const ToolTip = styled.span`
  font-size: 1.4rem;
  position: relative;
  top: -40px;
  font-weight: 500;
  color: var(--main-white);
  border: ${overlayTooltipBorderWidth} solid #fff;
  background-color: var(--main-green);
  white-space: nowrap;
  padding: 10px 25px 8px;
  border-radius: 20px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    border-style: solid;
    border-width: 10px 5px 0 5px;
    border-color: var(--main-green) transparent;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: calc(-10px - ${overlayTooltipBorderWidth});
    border-style: solid;
    border-width: calc(10px + ${overlayTooltipBorderWidth}) calc(5px + ${overlayTooltipBorderWidth})
      0 calc(5px + ${overlayTooltipBorderWidth});
    border-color: #fff transparent;
  }
`;

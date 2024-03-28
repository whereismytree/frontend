import styled from 'styled-components';

export const Map = styled.div`
  position: relative;
  height: 100%;
`;

export const Content = styled.main`
  position: relative;
  height: var(--content-height);
  overflow: hidden;

  button:first-child {
    position: absolute;
    top: -30px;
    right: 10px;
  }
`;

export const GuideWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  height: var(--content-height);
  display: flex;
  background-color: var(--grey-light);
  align-items: center;
`;

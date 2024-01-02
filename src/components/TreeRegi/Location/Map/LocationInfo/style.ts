import styled from 'styled-components';

export const LOCATION_INFO_HEIGHT = 204;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-height: ${LOCATION_INFO_HEIGHT}px;
  padding: 30px 25px;
  background-color: var(--main-white);
  border-radius: 10px 10px 0 0;
  box-shadow: 1px -1px 5px var(--grey-medium);
  border-bottom: 1px solid black;
`;

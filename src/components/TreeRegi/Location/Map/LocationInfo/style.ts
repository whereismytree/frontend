import styled from 'styled-components';

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-height: 204px;
  padding: 30px 25px;
  position: absolute;
  bottom: 0;
  background-color: var(--main-white);
  z-index: 100;
  border-radius: 10px 10px 0 0;
  box-shadow: 1px -1px 5px var(--grey-medium);
  border-bottom: 1px solid black;
`;

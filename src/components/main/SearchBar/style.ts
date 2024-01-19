import styled from 'styled-components';

export const SearchBar = styled.div`
  cursor: pointer;
  z-index: 10;
  margin: 0 1.6rem;
  padding: 1.6rem;
  width: calc(42rem - 3.2rem);
  height: 5.3rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 5px 1px #0000001a;
  position: absolute;
  top: 1.6rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Img = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Input = styled.p`
  color: #aeaeae;
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: -0.5rem;
`;

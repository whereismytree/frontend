import styled from 'styled-components';

export const Wrapper = styled.header`
  height: var(--header-height);
  border-bottom: 0.1rem solid var(--grey-medium);
  display: flex;
  align-items: center;
  position: relative;
`;

export const BackIcon = styled.button`
  width: 2rem;
  height: 2rem;
  border-top: 0.1rem solid var(--grey-medium);
  border-left: 0.1rem solid var(--grey-medium);
  transform: rotate(-45deg);
  margin: 0 2.5rem;
`;

export const Icon = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

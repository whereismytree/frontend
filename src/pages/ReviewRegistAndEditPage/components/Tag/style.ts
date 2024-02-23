import styled from 'styled-components';

export const Wrapper = styled.button`
  all: unset;
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 0.1rem solid var(--grey-light);
  border-radius: 1rem;
  padding: 0.85rem 1.2rem;
  box-sizing: border-box;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;

export const TagImg = styled.img`
  display: block;
  width: 15px;
  aspect-ratio: 1/1;
`;

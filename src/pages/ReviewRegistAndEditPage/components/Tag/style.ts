import styled from 'styled-components';

interface StyledProps {
  isselected: 'true' | undefined;
}

export const Wrapper = styled.button<StyledProps>`
  all: unset;
  cursor: pointer;
  height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 0.1rem solid var(--grey-light);
  border-radius: 1rem;
  padding: 0.85rem 1.2rem;
  box-sizing: border-box;
  background-color: ${({ isselected }) => (isselected ? 'var(--main-green)' : 'white')};
  transition: all 0.2s;
`;

export const Text = styled.p<StyledProps>`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ isselected }) => (isselected ? 'white' : 'var(--main-black)')};
`;

export const TagImg = styled.img`
  display: block;
  width: 15px;
  aspect-ratio: 1/1;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 2.6rem 0;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 2.4rem;
  color: var(--main-black);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.4rem 0;
`;

export const PhotoButton = styled.button`
  display: block;
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1.8rem;
  height: 4.2rem;
  padding: 1.2rem 1.8rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--grey-dark);
`;

export const PhotoIcon = styled.img`
  width: 1.7rem;
  aspect-ratio: 1/1;
  margin-right: 1.2rem;
`;

export const TextBox = styled.textarea`
  width: 37.2rem;
  height: 13.6rem;
  overflow: scroll;
  padding: 1.3rem 1.8rem;
  border: 0.1rem solid var(--grey-light);
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: var(--main-black);
  ::placeholder {
    color: var(--grey-mideum);
  }
`;

export const TextLength = styled.p`
  z-index: 10;
  text-align: right;
  margin: -3rem calc(2.4rem + 1.8rem) 0 0;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: var(--grey-medium);
  strong {
    color: var(--main-black);
  }
`;

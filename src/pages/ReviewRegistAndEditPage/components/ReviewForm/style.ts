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
  margin-bottom: 1.4rem;
`;

export const PhotoContainer = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  position: relative;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
`;

export const PhotoDeleteButton = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  background-color: var(--main-green);
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.2rem; // X 선의 너비
    height: 1.5rem; // X 선의 높이
    background-color: #fff; // X 선의 색상
    border-radius: 0.1rem;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const PhotoButton = styled.label`
  cursor: pointer;
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
  margin-top: 1.4rem;
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

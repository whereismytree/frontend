import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--grey-light);
`;

export const Title = styled.h1`
  font-family: 'UhBeeSe_hyun' !important;
  font-size: 8rem;
  font-weight: 700;
  text-align: center;
  color: var(--main-black);
  margin-bottom: 3rem;
`;

export const Img = styled.img`
  width: 26.5rem;
  height: 30.3rem;
  margin-bottom: 6.4rem;
`;

export const Text = styled.h2`
  font-size: 2rem;
  color: var(--grey-dark);
`;

export const DetailText = styled.p`
  font-size: 1.2rem;
  color: var(--grey-dark);
  margin: 1.2rem 0;
  white-space: pre-line;
  text-align: center;
  line-height: 1.8rem;
`;

export const Button = styled.button`
  width: 30rem;
  height: 4.4rem;
  background-color: var(--main-green);
  color: var(--main-white);
  border-radius: 0.5rem;
  font-size: 2rem;
  margin-top: 2.5rem;
`;

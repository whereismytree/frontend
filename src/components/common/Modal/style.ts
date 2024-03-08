import styled from 'styled-components';

export const Modal = styled.div`
  --modal-width: 300px;

  width: var(--modal-width);
  display: none;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 calc((var(--content-width) - var(--modal-width)) / 2);
  z-index: 999;
  border: 1px solid var(--grey-light);
  background-color: #fff;
  padding: 3.2rem 1.2rem 1.8rem;
  border-radius: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Content = styled.div`
  font-size: 1.6rem;
  margin-top: 2.4rem;
`;

export const Footer = styled.div`
  margin-top: 1.8rem;
`;

import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
`;

export const Img = styled.img`
  width: 3.4rem;
  height: 3.4rem;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.3rem;
`;

export const Modal = styled.div`
  display: flex;
  gap: 1.4rem;
  position: absolute;
  top: 8rem;
  right: 1.6rem;
  padding: 0.8rem 1.7rem 0.5rem 1.7rem;
  border: 0.1rem solid var(--grey-light);
  border-radius: 1rem;
`;

export const ModalItem = styled.button`
  cursor: pointer;
`;

export const ModalIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-bottom: 0.5rem;
`;

export const ModalText = styled.p`
  font-size: 0.6rem;
  font-weight: 300;
  line-height: 9px;
  letter-spacing: -0.022em;
  text-align: center;
`;

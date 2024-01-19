import styled from 'styled-components';

export const Wrapper = styled.article`
  z-index: 10;
  width: 38.8rem;
  height: 21.6rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.8rem 2rem;
  box-sizing: border-box;
  margin: 0 16px 12px 16px;
`;

export const Title = styled.div`
  color: #1a1a1a;
`;

export const Name = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.6rem;
`;

export const Address = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.3rem;
  span {
    font-weight: 700;
    line-height: 1.8rem;
    &::after {
      content: '|';
      color: #f1f1f1;
      margin: 0 1rem;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 11.2rem;
  height: 10.2rem;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
  z-index: 1;
  position: absolute;
  top: 1.8rem;
  right: 2rem;
`;

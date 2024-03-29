import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 10;
  width: calc(100% - 3.2rem);
  height: 21.6rem;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1.8rem 2rem;
  box-sizing: border-box;
  margin: 0 16px 12px 16px;
  position: relative;
`;

export const Title = styled.div`
  cursor: pointer;
  color: #1a1a1a;
  flex-basis: 70%;
`;

export const Name = styled.h2`
  font-size: 2.4rem;
  font-weight: bold;
  line-height: 3.6rem;
`;

export const Address = styled.p`
  font-size: 1.2rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

export const ImageContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  width: 100%;
  height: 10.2rem;
`;

export const Image = styled.img`
  width: 11.2rem;
  height: 10.2rem;
  object-fit: cover;
`;

export const Btns = styled.div`
  display: flex;
  gap: 1.6rem;
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2.6rem 0;
  border-bottom: 0.1rem solid var(--grey-light);
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 2.4rem;
  color: var(--main-black);
  span {
    font-size: 1.2rem;
    font-weight: 800;
    line-height: 1.8rem;
  }
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;
  color: var(--grey-dark);
  margin-bottom: 2rem;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;

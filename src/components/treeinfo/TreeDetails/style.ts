import styled from 'styled-components';

export const Wrapper = styled.section``;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid var(--grey-light);
  height: 4.1rem;
  padding: 0 2.4rem;
`;

export const SubTitle = styled.h3`
  color: var(--main-black);
  font-size: 1.4rem;
  font-weight: 700;
`;

export const EditInfoButton = styled.button`
  color: var(--main-green);
  font-size: 1.2rem;
`;

export const Details = styled.ul``;

export const DetailItem = styled.li`
  display: flex;
  align-items: center;
  height: 3.6rem;
  font-size: 1.2rem;
  border-bottom: 0.1rem solid var(--grey-light);
  padding: 0 2.4rem;
`;

export const ItemTitle = styled.p`
  color: var(--main-green);
  width: 4.6rem;
  margin-right: 2.1rem;
`;

export const ItemContent = styled.p`
  color: var(--main-black);
`;

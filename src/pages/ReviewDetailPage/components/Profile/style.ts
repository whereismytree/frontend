import styled from 'styled-components';

export const ReviewProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 16px 0;
  position: relative;

  div:nth-child(2) {
    flex-grow: 1;
  }
`;

export const NickName = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const CreateTime = styled.p`
  font-size: 1rem;
  color: var(--grey-medium);
`;

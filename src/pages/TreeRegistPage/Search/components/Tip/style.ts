import styled from 'styled-components';

export const SearchTip = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 36px 0 0 24px;

  strong {
    font-size: 1.6rem;
    font-weight: 800;
  }

  span:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.8rem;
  }

  span:last-child {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--grey-dark);
  }
`;

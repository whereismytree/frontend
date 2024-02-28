import styled from 'styled-components';

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 800;
  display: block;
  width: 100%;
  margin-bottom: 6px;
`;

export const OptionalText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: var(--grey-dark);
  margin-left: 6px;
`;

export const RequiredStar = styled.span`
  margin-left: 6px;
  color: #b5002d;

  &::before {
    content: '*';
  }
`;

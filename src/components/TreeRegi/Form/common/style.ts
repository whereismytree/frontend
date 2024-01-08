import styled from 'styled-components';

const SIDE_GAP = '24px';

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

export const LocationText = styled.p`
  color: var(--grey-dark);
`;

export const FormSection = styled.section`
  background-color: var(--main-white);
  padding: 20px ${SIDE_GAP};
`;

export const FormTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  margin: 14px ${SIDE_GAP};
`;

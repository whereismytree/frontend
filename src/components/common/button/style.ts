import styled from 'styled-components';

export const StyleButton = styled.button`
  width: 100%;
  height: 5.2rem;
  font-size: 2rem;
  font-weight: 800;
  color: var(--main-white);
  background-color: var(--main-green);
  border-radius: 10px;

  &:disabled {
    color: var(--grey-medium);
    background-color: var(--grey-light);
  }
`;

export const StyleMediumButton = styled(StyleButton)`
  font-size: 2rem;
  font-weight: 500;
  height: 4.4rem;
  border-radius: 5px;
`;

export const StyleCancelButton = styled(StyleMediumButton)`
  color: var(--grey-medium);
  background-color: var(--main-white);
  border: 1px solid var(--grey-light);

  &:disabled {
    color: initial;
    background-color: initial;
  }
`;

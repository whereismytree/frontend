import styled from 'styled-components';

export const OptionItem = styled.li`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--main-black);
  padding: 14px 40px;
  border-top: 1px solid var(--grey-light);
  border-bottom: 1px solid var(--grey-light);

  button {
    width: 100%;
    text-align: left;
    color: inherit;
  }
`;

export const DangerOptionItem = styled(OptionItem)`
  color: var(--grey-dark);
`;

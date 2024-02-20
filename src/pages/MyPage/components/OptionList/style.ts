import styled from 'styled-components';

export const Option = styled.li`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--main-black);
  padding: 14px 40px;
  border-top: 1px solid var(--grey-light);
  border-bottom: 1px solid var(--grey-light);
`;

export const DangerOption = styled(Option)`
  color: var(--grey-dark);
`;

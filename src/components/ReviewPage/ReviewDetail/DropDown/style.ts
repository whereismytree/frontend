import styled from 'styled-components';

export const OptionList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  padding: 6px 12px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;

export const Option = styled.li`
  font-size: 1rem;
  font-weight: 500;

  button {
    padding: 4px 0;
    font-size: inherit;
    font-weight: inherit;
  }
`;

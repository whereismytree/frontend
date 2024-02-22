import styled from 'styled-components';
import check from 'assets/check.svg';

const validTextStyle = styled.p`
  position: absolute;
  bottom: -20px;

  &::before {
    content: '';
    width: 13px;
    height: 13px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
`;

export const InvalidText = styled(validTextStyle)`
  color: #b5002d;

  &::before {
    content: 'X';
    text-align: center;
    line-height: 14px;
    color: #fff;
    background-color: #b5002d;
  }
`;

export const ValidText = styled(validTextStyle)`
  color: var(--main-green);

  &::before {
    background: url(${check}) no-repeat center;
    background-color: var(--main-green);
  }
`;

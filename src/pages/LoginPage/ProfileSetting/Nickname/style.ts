import styled from 'styled-components';
import check from 'assets/check.svg';

export const GuideText = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 25px 0 16px;
`;

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

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 8px;
  margin-bottom: 55px;
`;

const borderColor = (state: boolean | null) => {
  switch (state) {
    case true:
      return '#B5002D';

    case false:
      return 'var(--main-green)';

    default:
      return 'var(--grey-light)';
  }
};

export const Input = styled.input<{ $isError: null | boolean }>`
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 8px 14px;
  border: 1px solid ${({ $isError }) => borderColor($isError)};
  width: 100%;
`;

export const DupButton = styled.button`
  border-radius: 5px;
  padding: 8px 15px;
  flex-shrink: 0;
  background-color: var(--grey-light);
`;

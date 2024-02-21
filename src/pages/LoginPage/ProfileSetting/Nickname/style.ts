import styled from 'styled-components';

export const GuideText = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 25px 0 16px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 8px;
  margin-bottom: 55px;
`;

export const Input = styled.input<{ $isValid: boolean; $isEmpty: boolean }>`
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 8px 14px;
  width: 100%;

  border: 1px solid
    ${({ $isValid, $isEmpty }) => {
      if ($isEmpty) return 'var(--grey-light)';
      if ($isValid) return 'var(--main-green)';
      return '#B5002D';
    }};
`;

export const DupButton = styled.button`
  border-radius: 5px;
  padding: 8px 15px;
  flex-shrink: 0;
  background-color: var(--grey-light);
`;

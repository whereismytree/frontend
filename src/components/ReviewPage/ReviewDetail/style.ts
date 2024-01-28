import styled from 'styled-components';

export const ReviewProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 16px 0;
  position: relative;

  div:nth-child(2) {
    flex-grow: 1;
  }
`;

export const NickName = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

export const VerticalButton = styled.button<{ open: boolean }>`
  padding: 0 10px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  line-height: 11px;
  background-color: ${({ open }) => open && 'var(--grey-light)'};
`;

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

export const CreateTime = styled.p`
  font-size: 1rem;
  color: var(--grey-medium);
`;

export const ReviewText = styled.p`
  line-height: 1.8rem;
  font-size: 1.2rem;
  font-weight: 350;
`;

export const Tags = styled.div`
  margin-top: 16px;
`;

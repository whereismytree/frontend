import { ReactElement, ReactNode } from 'react';
import * as S from './style';

interface IOptionProps {
  children: ReactNode;
  onClick?: () => void;
}

function OptionList({ children }: { children: ReactElement<IOptionProps>[] }) {
  return <ul>{children}</ul>;
}

function Option({ children, onClick }: IOptionProps) {
  return (
    <S.OptionItem onClick={onClick}>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </S.OptionItem>
  );
}

function DangerOption({ children, onClick }: IOptionProps) {
  return (
    <S.DangerOptionItem>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </S.DangerOptionItem>
  );
}

OptionList.Option = Option;
OptionList.DangerOption = DangerOption;

export default OptionList;

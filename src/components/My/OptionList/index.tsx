import { ReactNode } from 'react';
import * as S from './style';

function OptionList({ children }: { children: ReactNode }) {
  return <ul>{children}</ul>;
}

interface IOptionProps {
  children: string;
}

function Option({ children }: IOptionProps) {
  return <S.Option>{children}</S.Option>;
}

function DangerOption({ children }: IOptionProps) {
  return <S.DangerOption>{children}</S.DangerOption>;
}

OptionList.Option = Option;
OptionList.DangerOption = DangerOption;

export default OptionList;

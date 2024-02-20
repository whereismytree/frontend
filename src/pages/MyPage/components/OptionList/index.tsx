import { ReactElement } from 'react';
import * as S from './style';

interface IOptionProps {
  children: string;
}

function OptionList({ children }: { children: ReactElement<IOptionProps>[] }) {
  return <ul>{children}</ul>;
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

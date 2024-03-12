import React, { useState, useId, useEffect, ReactNode } from 'react';
import { Option, ChoicedValue } from './types';
import * as S from './style';
import ChoiceProvider, { useChoiceContext } from './provider';

const ChoiceOption = ({ children, value, choiced }: Option) => {
  const { choicedOption, setChoicedOption } = useChoiceContext();
  const id = useId();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { value } = e.target as HTMLInputElement;
    setChoicedOption((prev) => (prev === value ? null : value));
  };

  return (
    <>
      <S.ButtonInput
        type="radio"
        id={`${id}${children}`}
        value={value}
        checked={choiced || choicedOption === value}
        onChange={() => {}}
        onClick={handleClick}
      />
      <S.ButtonLabel htmlFor={`${id}${children}`}>{children}</S.ButtonLabel>
    </>
  );
};

const Choice = ({
  onChoiceChange,
  children,
}: {
  onChoiceChange: (choiced: ChoicedValue) => void;
  children: ReactNode;
}) => {
  const [choicedOption, setChoicedOption] = useState<ChoicedValue>(null);
  const value = React.useMemo(() => ({ choicedOption, setChoicedOption }), [choicedOption]);

  useEffect(() => {
    if (onChoiceChange) {
      onChoiceChange(choicedOption);
    }
  }, [choicedOption, onChoiceChange]);

  return (
    <S.ButtonWrapper>
      <ChoiceProvider value={value}>{children}</ChoiceProvider>
    </S.ButtonWrapper>
  );
};

Choice.Option = ChoiceOption;

export default Choice;

import React, { useState, useEffect, useId, ReactNode } from 'react';
import * as S from '../Choice/style';
import { MultiChoicedValues } from './types';
import MultiChoiceProvider, { useMultiChoiceContext } from './provider';
import { Option } from '../Choice/types';

const MultiChoiceOption = ({ children, value }: Option) => {
  const { setChoicedOptions } = useMultiChoiceContext();
  const id = useId();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoicedOptions((prev) => {
      if (prev.includes(e.target.value)) {
        return prev.filter((value) => value !== e.target.value);
      }

      return [...prev, e.target.value];
    });
  };
  return (
    <>
      <S.ButtonInput
        type="checkbox"
        className="hidden"
        id={`${id}${children}`}
        value={value}
        onInput={handleInput}
      />
      <S.ButtonLabel htmlFor={`${id}${children}`}>{children}</S.ButtonLabel>
    </>
  );
};

const MultiChoice = ({
  onChoiceChange = () => {},
  children,
}: {
  onChoiceChange: (choicedOptions: MultiChoicedValues) => void;
  children: ReactNode;
}) => {
  const [choicedOptions, setChoicedOptions] = useState<MultiChoicedValues>([]);
  const value = { choicedOptions, setChoicedOptions };

  useEffect(() => {
    onChoiceChange(choicedOptions);
  }, [choicedOptions, onChoiceChange]);

  return (
    <S.ButtonWrapper>
      <MultiChoiceProvider value={value}>{children}</MultiChoiceProvider>;
    </S.ButtonWrapper>
  );
};

MultiChoice.Option = MultiChoiceOption;

export default MultiChoice;

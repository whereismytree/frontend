import React, { useState, forwardRef, useId, useEffect } from 'react';
import { Option, ChoicedValue } from './types';
import * as S from './style';

const Choice = forwardRef<
  HTMLInputElement,
  {
    options: Option[];
    onChoiceChange?: (selected: ChoicedValue) => void;
  } & React.HTMLAttributes<HTMLInputElement>
>(({ options, onChoiceChange, ...rest }, ref) => {
  const [choiced, setChoiced] = useState<ChoicedValue>(null);
  const id = useId();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { value } = e.target as HTMLInputElement;
    setChoiced((prev) => (prev === value ? null : value));
  };

  useEffect(() => {
    if (onChoiceChange) {
      onChoiceChange(choiced);
    }
  }, [choiced, onChoiceChange]);

  return (
    <S.ButtonWrapper>
      {options.map(({ text, value }) => (
        <React.Fragment key={value}>
          <S.ButtonInput
            {...rest}
            type="radio"
            id={`${id}${text}`}
            value={value}
            ref={ref}
            checked={choiced === value}
            onChange={() => {}}
            onClick={handleClick}
          />
          <S.ButtonLabel htmlFor={`${id}${text}`}>{text}</S.ButtonLabel>
        </React.Fragment>
      ))}
    </S.ButtonWrapper>
  );
});

export default Choice;

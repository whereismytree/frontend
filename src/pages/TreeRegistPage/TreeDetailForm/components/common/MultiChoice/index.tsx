import React, { useState, useEffect, useId } from 'react';
import * as S from '../Choice/style';
import { MultiChoiceProps } from './types';

const MultiChoice = React.forwardRef<
  HTMLInputElement,
  MultiChoiceProps & React.HTMLAttributes<HTMLInputElement>
>(({ options, onChoiceChange = () => {}, ...rest }, ref) => {
  const [choiced, setChoiced] = useState<string[]>([]);
  const [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement> | null>(null);
  const id = useId();

  useEffect(() => {
    if (event && event.target) {
      onChoiceChange({ target: event.target, choiced });
    }
  }, [choiced, event, onChoiceChange]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoiced((prev) => {
      if (prev.includes(e.target.value)) {
        return prev.filter((value) => value !== e.target.value);
      }

      return [...prev, e.target.value];
    });

    setEvent(e);
  };

  return (
    <S.ButtonWrapper ref={ref}>
      {options.map(({ text, value }) => {
        return (
          <React.Fragment key={value}>
            <S.ButtonInput
              type="checkbox"
              className="hidden"
              id={`${id}${text}`}
              value={value}
              onInput={handleInput}
              {...rest}
            />
            <S.ButtonLabel htmlFor={`${id}${text}`}>{text}</S.ButtonLabel>
          </React.Fragment>
        );
      })}
    </S.ButtonWrapper>
  );
});

export default MultiChoice;

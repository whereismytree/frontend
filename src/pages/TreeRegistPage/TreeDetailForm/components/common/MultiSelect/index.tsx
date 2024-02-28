import React, { useState, ForwardRefRenderFunction, useEffect, useId } from 'react';
import { Option } from '../Select/types';
import * as S from '../Select/style';

interface MultiSelectProps {
  options: Option[];
  onSelectChange?: (e: { target: EventTarget & HTMLInputElement; selected: string[] }) => void;
}

const MultiSelect: ForwardRefRenderFunction<
  HTMLInputElement,
  MultiSelectProps & React.HTMLAttributes<HTMLInputElement>
> = ({ options, onSelectChange = () => {}, ...rest }, ref) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [event, setEvent] = useState<React.ChangeEvent<HTMLInputElement> | null>(null);
  const id = useId();

  useEffect(() => {
    if (event && event.target) {
      onSelectChange({ target: event.target, selected });
    }
  }, [selected, event, onSelectChange]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected((prev) => {
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
};

export default React.forwardRef(MultiSelect);

import React, { useState, forwardRef, useId, useEffect } from 'react';
import { Option, SelectedValue } from './types';
import * as S from './style';

const Select = forwardRef<
  HTMLInputElement,
  {
    options: Option[];
    onSelectChange?: (selected: SelectedValue) => void;
  } & React.HTMLAttributes<HTMLInputElement>
>(({ options, onSelectChange, ...rest }, ref) => {
  const [selected, setSelected] = useState<SelectedValue>(null);
  const id = useId();

  const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { value } = e.target as HTMLInputElement;
    setSelected((prev) => (prev === value ? null : value));
  };

  useEffect(() => {
    if (onSelectChange) {
      onSelectChange(selected);
    }
  }, [selected, onSelectChange]);

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
            checked={selected === value}
            onChange={() => {}}
            onClick={handleClick}
          />
          <S.ButtonLabel htmlFor={`${id}${text}`}>{text}</S.ButtonLabel>
        </React.Fragment>
      ))}
    </S.ButtonWrapper>
  );
});

export default Select;

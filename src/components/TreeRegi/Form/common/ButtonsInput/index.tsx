import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import IInputProps from 'types/InputProps';
import * as CommonS from '../style';
import * as S from './style';

interface ButtonsInputProps extends IInputProps {
  multiple?: boolean;
  values: { text: string; value: boolean | number }[];
  setValue: ReturnType<typeof useForm>['setValue'];
}

function ButtonsInput({
  register,
  name,
  options,
  children,
  values: buttonValues,
  multiple,
  required = false,
  setValue,
}: ButtonsInputProps) {
  const [selected, setSelected] = useState<string | null>();

  const singleCheckboxOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const currentItem = e.target as HTMLInputElement;

    if (selected === currentItem.value) {
      setSelected(null);
    } else {
      setSelected(currentItem.value);
    }

    setValue(name, currentItem.value);
  };

  return (
    <>
      <CommonS.Label htmlFor={name}>
        {children}
        {!required && <CommonS.OptionalText>(선택)</CommonS.OptionalText>}
      </CommonS.Label>
      <S.ButtonWrapper>
        {buttonValues.map((buttonValue) => (
          <React.Fragment key={buttonValue.text}>
            <S.ButtonInput
              type={multiple ? 'checkbox' : 'radio'}
              id={buttonValue.text}
              value={buttonValue.value.toString()}
              onClick={(e) => !multiple && singleCheckboxOnClick(e)}
              className="hidden"
              {...(!multiple && { checked: selected === buttonValue.value.toString() })}
              {...register(multiple ? `${name}.${buttonValue.value}` : name, {
                required,
                ...options,
              })}
            />
            <S.ButtonLabel htmlFor={buttonValue.text} value={buttonValue.text}>
              {buttonValue.text}
            </S.ButtonLabel>
          </React.Fragment>
        ))}
      </S.ButtonWrapper>
    </>
  );
}

export default ButtonsInput;

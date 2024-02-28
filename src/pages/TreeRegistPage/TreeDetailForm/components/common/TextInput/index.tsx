import React from 'react';
import * as S from './style';

type TextInputProps = {
  valid?: boolean;
  invalid?: boolean;
  rest?: React.HTMLAttributes<HTMLInputElement>;
} & React.HTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ valid, invalid, ...rest }: TextInputProps, ref) => {
    return <S.TextInput ref={ref} type="text" $valid={valid} $invalid={invalid} {...rest} />;
  },
);

export default TextInput;

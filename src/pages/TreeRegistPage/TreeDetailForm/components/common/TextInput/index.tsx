import React from 'react';
import * as S from './style';

const TextInput = React.forwardRef<HTMLInputElement, React.HTMLAttributes<HTMLInputElement>>(
  ({ ...rest }, ref) => {
    return <S.TextInput ref={ref} type="text" {...rest} />;
  },
);

export default TextInput;

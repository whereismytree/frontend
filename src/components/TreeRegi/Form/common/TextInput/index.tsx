import IInputProps from 'types/InputProps';
import * as CommonS from '../../style';
import * as S from './style';

interface TextInputProps extends IInputProps {
  placeholder?: string;
  required?: boolean;
}

function TextInput({
  placeholder,
  name,
  children,
  optional,
  options,
  register,
  required = false,
}: TextInputProps) {
  return (
    <>
      <CommonS.Label htmlFor={name}>
        {children}
        {optional && <CommonS.OptionalText>(선택)</CommonS.OptionalText>}
        {required && <S.RequiredStar>*</S.RequiredStar>}
      </CommonS.Label>
      <S.TextInput
        type="text"
        placeholder={placeholder}
        {...register(name, { required, ...options })}
      />
    </>
  );
}

export default TextInput;

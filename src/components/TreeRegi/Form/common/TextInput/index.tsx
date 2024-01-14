import IInputProps from 'types/InputProps';
import * as CommonS from '../style';
import * as S from './style';

interface TextInputProps extends IInputProps {
  placeholder?: string;
  required?: boolean;
}

function TextInput({
  placeholder,
  name,
  children,
  options,
  register,
  required = false,
}: TextInputProps) {
  return (
    <>
      {children && (
        <CommonS.Label htmlFor={name}>
          {children}
          {!required && <CommonS.OptionalText>(선택)</CommonS.OptionalText>}
          {required && <S.RequiredStar>*</S.RequiredStar>}
        </CommonS.Label>
      )}
      <S.TextInput
        type="text"
        placeholder={placeholder}
        {...register(name, { required, ...options })}
      />
    </>
  );
}

export default TextInput;

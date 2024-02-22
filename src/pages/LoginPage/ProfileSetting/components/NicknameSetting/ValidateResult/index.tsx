import { useFormContext } from 'react-hook-form';
import * as S from './style';

function ValidateResult() {
  const {
    formState: { isValid, errors },
  } = useFormContext();

  return isValid ? (
    <S.ValidText>좋아요!</S.ValidText>
  ) : (
    <S.InvalidText>{errors.nickname?.message as string}</S.InvalidText>
  );
}

export default ValidateResult;

import { ReactNode } from 'react';
import * as S from './style';

function ValidateResult({ isValid, children }: { isValid: boolean; children: ReactNode }) {
  return isValid ? <S.ValidText>좋아요!</S.ValidText> : <S.InvalidText>{children}</S.InvalidText>;
}

export default ValidateResult;

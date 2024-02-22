import { useFormContext } from 'react-hook-form';
import DupCheckButton from './DupCheckButton';
import NicknameInput from './Input';
import ValidateResult from './ValidateResult';
import * as S from './style';

function NicknameSetting() {
  const isHaveNickname = !!useFormContext().watch('nickname');

  return (
    <>
      <S.GuideText>닉네임을 설정해주세요.</S.GuideText>
      <S.InputWrapper>
        <NicknameInput />
        <DupCheckButton />
        {isHaveNickname && <ValidateResult />}
      </S.InputWrapper>
    </>
  );
}

export default NicknameSetting;

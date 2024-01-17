import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import Button from 'components/common/button';
import * as S from './style';

function NicknameSetting() {
  const { register, getValues } = useFormContext();
  const [nicknameError, setNicknameError] = useState<{ error: null | boolean; message: string }>({
    error: null,
    message: '',
  });

  const checkNickname = async (nickname: string) => {
    if (!validateNickname(nickname)) return;
    const isDupNickname = await checkDuplicateNickname(nickname);

    if (isDupNickname) {
      setNicknameError({
        error: true,
        message: '다른 사람이 쓰고 있어요! 다른 닉네임을 정해주세요',
      });
    } else {
      setNicknameError({ error: false, message: '좋아요!' });
    }
  };

  const validateNickname = (nickname: string) => {
    const MIN_NICKNAME_LENGTH = 2;
    const MAX_NICKNAME_LENGTH = 8;

    if (nickname.length < 2 || nickname.length > 8) {
      setNicknameError({
        error: true,
        message: `닉네임은 최소 ${MIN_NICKNAME_LENGTH}글자, 최대 ${MAX_NICKNAME_LENGTH}글자여야 합니다.`,
      });

      return false;
    }

    if (!/^[가-힣\d]+$/i.test(nickname)) {
      setNicknameError({
        error: true,
        message: '닉네임은 한글과 숫자로만 이루어져야 합니다.',
      });

      return false;
    }

    setNicknameError({ error: false, message: '' });
    return true;
  };

  const checkDuplicateNickname = async (nickname: string) => {
    const {
      data: { available },
    } = await axios.get(
      `${process.env.REACT_APP_TREE_API_URL}v1/my/check/nickname?nickname=${nickname}`,
    );

    return !available;
  };

  return (
    <>
      <S.GuideText>닉네임을 설정해주세요.</S.GuideText>
      <S.InputWrapper>
        <S.Input
          placeholder="닉네임을 입력해주세요"
          type="text"
          $isError={nicknameError.error}
          {...register('nickname', {
            required: true,
          })}
        />
        <S.DupButton
          type="button"
          onClick={() => {
            const nickname = getValues('nickname');
            checkNickname(nickname);
          }}
        >
          중복확인
        </S.DupButton>

        {nicknameError.error !== null && nicknameError.error && (
          <S.InvalidText>{nicknameError.message}</S.InvalidText>
        )}
        {nicknameError.error !== null && !nicknameError.error && <S.ValidText>좋아요!</S.ValidText>}
      </S.InputWrapper>
      {nicknameError.error !== null && !nicknameError.error && (
        <Button.Small type="submit">다음으로</Button.Small>
      )}
    </>
  );
}

export default NicknameSetting;

import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useProfileSettingContext } from '../../../provider';
import * as S from './style';

const NICKNAME_LENGTH = { min: 2, max: 8 };
// 한글과 숫자로만 이루어져 있는지 확인하는 정규식
const KorAndNumRegex = /^[가-힣\d]+$/i;

const validateOptions = {
  minLength: {
    value: NICKNAME_LENGTH.min,
    message: `닉네임은 최소 ${NICKNAME_LENGTH.min}글자, 최대 ${NICKNAME_LENGTH.max}글자여야 합니다.`,
  },
  maxLength: {
    value: NICKNAME_LENGTH.max,
    message: `닉네임은 최소 ${NICKNAME_LENGTH.min}글자, 최대 ${NICKNAME_LENGTH.max}글자여야 합니다.`,
  },
  pattern: {
    value: KorAndNumRegex,
    message: '닉네임은 한글과 숫자로만 이루어져야 합니다.',
  },
};

function NicknameInput() {
  const {
    register,
    formState: { isValid },
  } = useFormContext();

  const { setAvailable, lastCheckedNickname } = useProfileSettingContext();
  const [isEmpty, setIsEmpty] = useState(true);

  // 디바운싱 활용한 유효성 검사
  const validateNickname = (currentNickname: string) => {
    if (lastCheckedNickname) {
      setAvailable(lastCheckedNickname === currentNickname);
    }
    setIsEmpty(currentNickname === '');
  };

  return (
    <S.Input
      type="text"
      placeholder="닉네임을 입력해주세요"
      $isEmpty={isEmpty}
      $isValid={isValid}
      {...register('nickname', {
        required: true,
        onChange: (e) => {
          validateNickname(e.target.value);
        },
        ...validateOptions,
      })}
    />
  );
}

export default NicknameInput;

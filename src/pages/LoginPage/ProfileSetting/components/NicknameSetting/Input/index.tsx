import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import useDebouncedCallback from 'hooks/useDebouncedCallback';
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
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const checkSameNickname = (currentNickname: string) => {
      if (lastCheckedNickname) {
        setAvailable(lastCheckedNickname === currentNickname);
      }
    };

    checkSameNickname(nickname);

    const checkHaveNickname = (currentNickname: string) => {
      setIsEmpty(!!currentNickname);
    };

    checkHaveNickname(nickname);
  }, [nickname]);

  // 디바운싱 활용, 마지막으로 중복확인한 닉네임과 현재 인풋창에 입력되어 있는 값이 동일한지 확인 후 유효성 상태에 반영
  const checkAvailable = useDebouncedCallback((currentNickname: string) => {
    setNickname(currentNickname);
  });

  return (
    <S.Input
      type="text"
      placeholder="닉네임을 입력해주세요"
      $isEmpty={isEmpty}
      $isValid={isValid}
      {...register('nickname', {
        required: true,
        ...validateOptions,
        onChange: (e) => {
          checkAvailable(e.target.value);
        },
      })}
    />
  );
}

export default React.memo(NicknameInput);

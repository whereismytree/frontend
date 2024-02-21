import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import Button from 'components/common/button';
import useDebouncedCallback from 'hooks/useDebouncedCallback';
import ValidateResult from './ValidateResult';
import * as S from './style';

const NICKNAME_LENGTH = { min: 2, max: 8 };
const NICKNAME_FORM_NAME = 'nickname';
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

const checkNicknameDuplicate = async (nickname: string) => {
  const {
    data: { available },
  } = await axios.get(
    `${process.env.REACT_APP_TREE_API_URL}v1/my/check/nickname?nickname=${nickname}`,
  );

  return !available;
};

function NicknameSetting() {
  const {
    register,
    getValues,
    watch,
    setError,
    formState: { errors },
  } = useFormContext();
  const isHaveNickname = !!watch(NICKNAME_FORM_NAME);
  const isValidNickname = !Object.prototype.hasOwnProperty.call(errors, NICKNAME_FORM_NAME);
  const [isAvailable, setAvailable] = useState(false);
  const lastCheckedNickname = useRef('');
  // 디바운싱 활용, 마지막으로 중복확인한 닉네임과 현재 인풋창에 입력되어 있는 값이 동일한지 확인 후 유효성 상태에 반영
  const checkIfSameAsLastCheckedNickname = useDebouncedCallback((currentNickname: string) => {
    setAvailable(currentNickname === lastCheckedNickname.current);
  });

  const handleDupBtnClick = async (nickname: string) => {
    const isDuplicate = await checkNicknameDuplicate(nickname);

    if (isDuplicate) {
      setError(NICKNAME_FORM_NAME, {
        message: '다른 사람이 쓰고 있어요! 다른 닉네임을 정해주세요',
      });
    } else {
      setAvailable(true);
      lastCheckedNickname.current = nickname;
    }
  };

  return (
    <>
      <S.GuideText>닉네임을 설정해주세요.</S.GuideText>
      <S.InputWrapper>
        <S.Input
          type="text"
          placeholder="닉네임을 입력해주세요"
          $isEmpty={!isHaveNickname}
          $isValid={isValidNickname}
          {...register(NICKNAME_FORM_NAME, {
            required: true,
            onChange: (e) => checkIfSameAsLastCheckedNickname(e.target.value),
            ...validateOptions,
          })}
        />

        <S.DupButton
          type="button"
          onClick={() => handleDupBtnClick(getValues(NICKNAME_FORM_NAME))}
          disabled={!!true}
        >
          중복확인
        </S.DupButton>

        {isHaveNickname && (
          <ValidateResult isValid={isValidNickname}>
            {errors[NICKNAME_FORM_NAME]?.message as string}
          </ValidateResult>
        )}
      </S.InputWrapper>

      {isAvailable && <Button.Small type="submit">다음으로</Button.Small>}
    </>
  );
}

export default NicknameSetting;

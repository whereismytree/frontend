import { createContext, useMemo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import Button from 'components/common/button';
import ValidateResult from './ValidateResult';
import * as S from './style';
import NicknameInput from './Input';

const NICKNAME_FORM_NAME = 'nickname';

const checkNicknameDuplicate = async (nickname: string) => {
  const {
    data: { available },
  } = await axios.get(
    `${process.env.REACT_APP_TREE_API_URL}v1/my/check/nickname?nickname=${nickname}`,
  );

  return !available;
};

type NicknameSettingContext = {
  available: boolean;
  setAvailable: React.Dispatch<React.SetStateAction<boolean>>;
  lastCheckedNickname: string;
};

export const NicknameSettingContext = createContext<NicknameSettingContext>({
  available: false,
  setAvailable: () => {},
  lastCheckedNickname: '',
});

function NicknameSetting() {
  const {
    getValues,
    watch,
    setError,
    formState: { errors },
  } = useFormContext();
  const isHaveNickname = !!watch(NICKNAME_FORM_NAME);
  const isValidNickname = !Object.prototype.hasOwnProperty.call(errors, NICKNAME_FORM_NAME);
  const [available, setAvailable] = useState(false);
  const lastCheckedNickname = useRef('');

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
    <NicknameSettingContext.Provider
      value={useMemo(() => {
        return {
          available,
          setAvailable,
          lastCheckedNickname: lastCheckedNickname.current,
        };
      }, [available])}
    >
      <S.GuideText>닉네임을 설정해주세요.</S.GuideText>
      <S.InputWrapper>
        <NicknameInput />
        <S.DupButton
          type="button"
          onClick={() => handleDupBtnClick(getValues(NICKNAME_FORM_NAME))}
          disabled={!isValidNickname}
        >
          중복확인
        </S.DupButton>

        {isHaveNickname && (
          <ValidateResult isValid={isValidNickname}>
            {errors[NICKNAME_FORM_NAME]?.message as string}
          </ValidateResult>
        )}
      </S.InputWrapper>

      {available && <Button.Small type="submit">다음으로</Button.Small>}
    </NicknameSettingContext.Provider>
  );
}

export default NicknameSetting;

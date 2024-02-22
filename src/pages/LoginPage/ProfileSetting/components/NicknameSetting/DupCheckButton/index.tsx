import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import * as S from './style';
import { useProfileSettingContext } from '../../../provider';

const checkNicknameDuplicate = async (nickname: string) => {
  const {
    data: { available },
  } = await axios.get(
    `${process.env.REACT_APP_TREE_API_URL}v1/my/check/nickname?nickname=${nickname}`,
  );

  return !available;
};

function DupCheckButton() {
  const {
    getValues,
    setError,
    formState: { isValid },
  } = useFormContext();
  const { setAvailable, setLastCheckedNickname } = useProfileSettingContext();
  const handleDupBtnClick = async (nickname: string) => {
    const isDuplicate = await checkNicknameDuplicate(nickname);

    if (isDuplicate) {
      setError('nickname', {
        message: '다른 사람이 쓰고 있어요! 다른 닉네임을 정해주세요',
      });
    } else {
      setAvailable(true);
      setLastCheckedNickname(nickname);
    }
  };

  return (
    <S.DupButton
      type="button"
      onClick={() => handleDupBtnClick(getValues('nickname'))}
      disabled={!isValid}
    >
      중복확인
    </S.DupButton>
  );
}

export default DupCheckButton;

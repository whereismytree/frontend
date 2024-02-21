import { FormProvider, useForm } from 'react-hook-form';
import ProfileImageSetting from 'pages/LoginPage/ProfileSetting/ProfileImage';
import NicknameSetting from 'pages/LoginPage/ProfileSetting/Nickname';
import useApiMutation from 'hooks/useApiMutation';
import { useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';
import Topbar from 'components/Topbar';
import * as S from './style';

interface IProfile {
  nickname: string;
  profileImageUrl: string;
}

function Nickname() {
  const methods = useForm<IProfile>({ mode: 'onChange' });
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const { mutate } = useApiMutation<{ nickname: string; profileImageUrl: string }>(
    'v1/my/profile',
    'POST',
    {
      onSuccess: () => {
        navigate(getPath('mainPage', 'root'));
      },

      onError: (e) => {
        throw new Error(`'닉네임을 설정하던 도중 오류가 발생했습니다.' ${e.message}`);
      },
    },
  );

  const createProfile = (data: Omit<IProfile, 'profileImageUrl'>) => {
    mutate({ ...data, profileImageUrl: 'http://s3.example.com/image1' });
  };

  return (
    <>
      <Topbar.Icon type="cookie" />
      <FormProvider {...methods}>
        <S.Wrapper onSubmit={handleSubmit(createProfile)}>
          <ProfileImageSetting />
          <NicknameSetting />
        </S.Wrapper>
      </FormProvider>
    </>
  );
}

export default Nickname;

import { FormProvider, useForm } from 'react-hook-form';
import ProfileImageSetting from 'pages/LoginPage/ProfileSetting/components/ImageSetting';
import NicknameSetting from 'pages/LoginPage/ProfileSetting/components/NicknameSetting';
import useApiMutation from 'hooks/useApiMutation';
import { useNavigate } from 'react-router-dom';
import Topbar from 'components/Topbar';
import PATH from 'constants/path';
import * as S from './style';

interface IProfile {
  nickname: string;
  profileImageUrl: string;
}

function Nickname() {
  const methods = useForm<IProfile>();
  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const { mutate } = useApiMutation<{ nickname: string; profileImageUrl: string }>(
    'v1/my/profile',
    'POST',
    {
      onSuccess: () => {
        navigate(PATH.mainPage.root);
      },

      onError: (e) => {
        console.error(e);
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
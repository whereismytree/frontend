import { FormProvider, useForm } from 'react-hook-form';
import ProfileImageSetting from 'pages/LoginPage/ProfileSetting/components/ImageSetting';
import { useNavigate } from 'react-router-dom';
import getPath from 'utils/getPath';
import Topbar from 'components/Topbar';
import { useProfile } from './hooks';
import ProfileSettingProvider from './provider';
import { ICreateProfileAPIBody } from './types';
import * as S from './style';
import SubmitButton from './components/SubmitButton';
import NicknameSetting from './components/NicknameSetting';

function ProfileSetting() {
  const navigate = useNavigate();
  const { create } = useProfile();
  const methods = useForm<ICreateProfileAPIBody>({ mode: 'onChange' });
  const { handleSubmit } = methods;

  const createProfile = (data: Omit<ICreateProfileAPIBody, 'profileImageUrl'>) => {
    create(
      { ...data, profileImageUrl: 'http://s3.example.com/image1' },
      {
        onSuccess: () => navigate(getPath('mainPage', 'root')),
      },
    );
  };

  return (
    <>
      <Topbar.Icon type="cookie" />
      <FormProvider {...methods}>
        <ProfileSettingProvider>
          <S.Form onSubmit={handleSubmit(createProfile)}>
            <ProfileImageSetting />
            <NicknameSetting />
            <SubmitButton />
          </S.Form>
        </ProfileSettingProvider>
      </FormProvider>
    </>
  );
}

export default ProfileSetting;

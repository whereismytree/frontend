import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileImageSetting from 'pages/LoginPage/ProfileSetting/components/ImageSetting';
import getPath from 'utils/getPath';
import Topbar from 'components/Topbar';
import InvalidAccess from 'components/Error/InvalidAccess';
import { useProfile } from './hooks';
import ProfileSettingProvider from './provider';
import { ICreateProfileAPIBody } from './types';
import SubmitButton from './components/SubmitButton';
import NicknameSetting from './components/NicknameSetting';
import * as S from './style';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { create } = useProfile();
  const methods = useForm<ICreateProfileAPIBody>({ mode: 'onChange' });
  const { handleSubmit } = methods;

  useEffect(() => {
    if (state && !state.nicknameRequire) {
      navigate(getPath('mainPage', 'root'));
    }
  }, [navigate, state]);

  const createProfile = (data: Omit<ICreateProfileAPIBody, 'profileImageUrl'>) => {
    create(
      { ...data, profileImageUrl: 'http://s3.example.com/image1' },
      {
        onSuccess: () => navigate(getPath('mainPage', 'root')),
      },
    );
  };

  return state ? (
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
  ) : (
    <InvalidAccess />
  );
}

export default ProfileSetting;

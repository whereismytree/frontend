import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileImageSetting from 'pages/LoginPage/ProfileSetting/components/ImageSetting';
import getPath from 'utils/getPath';
import InvalidAccessGuide from 'components/Guides/InvalidAccess';
import convertImageFileToUrl from 'utils/imageUtils/convertImageFileToUrl';
import Topbar from 'components/Topbar';
import SubmitButton from './components/SubmitButton';
import NicknameSetting from './components/NicknameSetting';
import { useCreateProfile } from './hooks';
import ProfileSettingProvider from './provider';
import { IUserProfileAPIRequestBody, IUserProfileInputData } from './types';
import * as S from './style';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const create = useCreateProfile();
  const methods = useForm<IUserProfileInputData>({ mode: 'onChange' });
  const { handleSubmit } = methods;

  useEffect(() => {
    if (state && !state.nicknameRequire) {
      navigate(getPath('mainPage', 'root'));
    }
  }, [navigate, state]);

  const createProfile = async (data: IUserProfileInputData) => {
    const apiBody = await convertToProfileAPIFormat(data);

    create(apiBody, {
      onSuccess: () => navigate(getPath('mainPage', 'root')),
    });
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
    <InvalidAccessGuide />
  );
}

const convertToProfileAPIFormat = async (userProfileData: IUserProfileInputData) => {
  const profileImageUrl =
    userProfileData.profileImage instanceof File
      ? await convertImageFileToUrl(userProfileData.profileImage)
      : userProfileData.profileImage;

  const convertedProfileData: IUserProfileAPIRequestBody = {
    nickname: userProfileData.nickname,
    profileImageUrl,
  };

  return convertedProfileData;
};

export default ProfileSetting;

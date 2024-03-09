/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import ProfileImageSetting from 'pages/LoginPage/ProfileSetting/components/ImageSetting';
import getPath from 'utils/getPath';
import Topbar from 'components/Topbar';
import InvalidAccess from 'components/Guides/InvalidAccess';
import { useCreateProfile } from './hooks';
import ProfileSettingProvider from './provider';
import SubmitButton from './components/SubmitButton';
import NicknameSetting from './components/NicknameSetting';
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

  // profile 설정 요청을 보내려면 profileImageUrl 데이터가 falsy한 데이터면 안된다. 무조건 실체가 있는 문자열 URL을 전송해야함.
  const createProfile = (data: IUserProfileInputData) => {
    console.log(data);
    const apiBody = convertToProfileAPIFormat(data);

    // create(
    //   apiBody,
    //   {
    //     onSuccess: () => navigate(getPath('mainPage', 'root')),
    //   },
    // );
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

const convertToProfileAPIFormat = (
  userProfileData: IUserProfileInputData,
): IUserProfileAPIRequestBody => {
  return {} as IUserProfileAPIRequestBody;
};

export default ProfileSetting;

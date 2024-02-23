import React from 'react';
import PATH from 'constants/path';
import * as S from './style';

export const SignIn = () => {
  const googleLoginUrl = `${process.env.REACT_APP_TREE_API_URL}oauth2/authorization/google`;
  const kakaoLoginUrl = `${process.env.REACT_APP_TREE_API_URL}oauth2/authorization/kakao`;

  return (
    <S.BackDrop>
      <S.Modal>
        <S.GuideText>
          어쩔트리와 추억을 공유하시려면
          <br /> 로그인을 해주세요
        </S.GuideText>
        <S.LoginButtonWrapper>
          <S.LoginButton platform="google" href={googleLoginUrl}>
            <strong>Google</strong>로 계속
          </S.LoginButton>
          <S.LoginButton platform="kakao" href={kakaoLoginUrl}>
            <strong>Kakao</strong>로 계속
          </S.LoginButton>
        </S.LoginButtonWrapper>
        <S.SkipButton to={PATH.mainPage.root}>저쩔추억! Skip</S.SkipButton>
      </S.Modal>
    </S.BackDrop>
  );
};

import React from 'react';
import getPath from 'utils/getPath';
import * as S from './style';

function SignIn() {
  const SERVER_URI = process.env.REACT_APP_TREE_API_URL;
  const googleLoginUrl = `${SERVER_URI}oauth2/authorization/google`;
  const kakaoLoginUrl = `${SERVER_URI}oauth2/authorization/kakao`;

  return (
    <S.BackDrop>
      <S.Modal>
        <S.GuideText>
          어쩔트리와 추억을 공유하시려면
          <br /> 로그인을 해주세요. 버킷 업로드 테스트입니다.
        </S.GuideText>
        <S.LoginButtonWrapper>
          <S.LoginButton platform="google" href={googleLoginUrl}>
            <strong>Google</strong>로 계속
          </S.LoginButton>
          <S.LoginButton platform="kakao" href={kakaoLoginUrl}>
            <strong>Kakao</strong>로 계속
          </S.LoginButton>
        </S.LoginButtonWrapper>
        <S.SkipButton to={getPath('mainPage', 'root')}>저쩔추억! Skip</S.SkipButton>
      </S.Modal>
    </S.BackDrop>
  );
}

export default SignIn;

import React from 'react';
import * as S from './style';

export const SignIn = () => {
  return (
    <S.BackDrop>
      <S.Modal>
        <S.GuideText>
          어쩔트리와 추억을 공유하시려면
          <br /> 로그인을 해주세요
        </S.GuideText>
        <S.LoginButtonWrapper>
          <S.LoginButton platform="google">
            <strong>Google</strong>로 계속
          </S.LoginButton>
          <S.LoginButton platform="kakao">
            <strong>Kakao</strong>로 계속
          </S.LoginButton>
        </S.LoginButtonWrapper>
        <S.SkipButton to="">저쩔추억! Skip</S.SkipButton>
      </S.Modal>
    </S.BackDrop>
  );
};

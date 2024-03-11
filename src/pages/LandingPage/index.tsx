import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from 'assets/landing-logo.svg';
import getPath from 'utils/getPath';
import * as S from './style';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        setIsHover(true);
      });

      buttonRef.current.addEventListener('mouseleave', () => {
        setIsHover(false);
      });
    }
  }, []);

  const handleStartButtonClick = () => {
    navigate(getPath('loginPage', 'root'));
  };

  return (
    <S.Wrapper>
      <S.Background>
        <S.Content $isHover={isHover}>
          <S.TitleImage src={Logo} alt="어쩔트리 로고" />
          <S.SubTitle>트리가 없는데 어쩌란 말이냐...</S.SubTitle>
          <S.GuideText>
            어쩔트리로 트리를 찾아보고
            <br />
            모두에게 트리를 공유해보세요!
          </S.GuideText>
          <S.StartButton ref={buttonRef} onClick={handleStartButtonClick}>
            시작하기
          </S.StartButton>
        </S.Content>
      </S.Background>
      <S.Snow $isHover={isHover} />
    </S.Wrapper>
  );
};

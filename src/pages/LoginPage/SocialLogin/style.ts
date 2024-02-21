import styled from 'styled-components';
import backdrop from 'assets/login_background.png';
import google from 'assets/google-logo.svg';
import kakao from 'assets/kakao-logo.svg';
import { Link } from 'react-router-dom';

export const BackDrop = styled.div`
  position: relative;
  background: url(${backdrop}) no-repeat center;
  width: 100%;
  height: 100vh;
`;

export const Modal = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
  font-size: 1.4rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 35px;
  flex-grow: 0;
  background-color: #fff;
  width: calc(100% - 16px * 2);
`;

export const GuideText = styled.p`
  line-height: 2.1rem;
`;

export const LoginButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const styleButton = `
  cursor: pointer;
  font-size: 1.4rem;
  display: block;
  border-radius: 50px;
  text-align: center; 
  padding: 15px 0;
  border: 1px solid var(--grey-light);
`;

export const LoginButton = styled.a<{ platform: 'kakao' | 'google' }>`
  ${styleButton}

  font-weight: 500;
  background: ${({ platform }) => `url(${platform === 'kakao' ? kakao : google}) no-repeat 10px`};

  strong {
    font-weight: 900;
  }
`;

export const SkipButton = styled(Link)`
  ${styleButton}

  position: relative;
  color: var(--grey-dark);
  font-weight: 700;
  margin-top: 30px;
  background-color: var(--grey-light);

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: var(--grey-light);
    position: absolute;
    top: -30px;
  }
`;

import styled from 'styled-components';
import backdrop from 'assets/profile-backdrop.svg';
import googleLogo from 'assets/google-logo.svg';
import kakaoLogo from 'assets/kakao-logo.svg';
import bow from 'assets/bow.svg';
import { Link } from 'react-router-dom';
import TPlatform from 'types/platform';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${backdrop}) no-repeat top / contain;
  border-bottom: 1px solid var(--grey-light);
  padding-top: 30px;
`;

export const Name = styled.h2`
  font-size: 2.4rem;
  margin-top: 21px;
  font-weight: 700;
`;

export const LoginInfo = styled.p<{ $platform: TPlatform }>`
  font-size: 12px;
  font-weight: 350;
  color: var(--grey-dark);
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid var(--grey-light);
  box-sizing: border-box;
  margin-top: 12px;
  padding: 6px 14px 6px 10px;
  border-radius: 50px;

  &::before {
    content: '';
    background: url(${({ $platform }) => ($platform === 'KAKAO' ? kakaoLogo : googleLogo)})
      no-repeat left / contain;
    display: inline-block;
    width: 18px;
    aspect-ratio: 1/1;
  }
`;

export const ActivitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 24px 0 41px;
`;

export const Activity = styled(Link)`
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100px;
  height: 110px;
  border: 0.5px solid var(--grey-dark);
  border-radius: 10px;
  background-color: var(--grey-light);

  p:first-child {
    font-size: 2rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p:last-child {
    font-size: 1.2rem;
    color: var(--main-black);
    font-weight: 300;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
  }

  &::before {
    content: url(${bow});
    position: relative;
    top: -10px;
  }
`;

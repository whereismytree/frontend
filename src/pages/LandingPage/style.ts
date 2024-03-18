import styled, { css, keyframes } from 'styled-components';
import treeAnimation from 'assets/tree-animation.png';
import stars from 'assets/landing-stars.png';

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div<{ $isHover: boolean }>`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12vh;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);

  ${({ $isHover }) =>
    $isHover &&
    css`
      color: ${hoverColor};
    `}
`;

export const TitleImage = styled.img`
  width: 80%;
  margin-bottom: 25px;
`;

export const SubTitle = styled.p`
  font-family: 'UhBeeSe_hyun' !important;
  font-size: 1.4rem;
  margin-bottom: 14px;
`;

export const GuideText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.1rem;
  margin-bottom: 35px;
`;

export const hoverColor = '#ffe16f';

export const StartButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  border-radius: 30px;
  border: 1px solid #fff;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 60px;

  &:hover {
    color: ${hoverColor};
    border-color: ${hoverColor};
  }
`;

export const Background = styled.div`
  height: 85vh;
  color: white;
  background: url(${stars}) center / contain;
  background-color: #000;
`;

const treeReductionScale = 5;
const treeZoom = 1.3;
const calculatedTreeHeight = `${(1276 / treeReductionScale) * treeZoom}px`;

const sparkle = keyframes`
    to {
      background-position: right 0;
    }
  `;

export const Snow = styled.div<{ $isHover: boolean }>`
  width: 100%;
  position: relative;
  height: 10vh;
  box-shadow: 0 -15px 10px 10px #fff;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: calc(-${calculatedTreeHeight} + 20px);
    left: 50%;
    transform: translateX(-50%);
    width: calc((4995px / ${treeReductionScale}) / 5 * ${treeZoom});
    height: ${calculatedTreeHeight};
    overflow: hidden;
    background: url(${treeAnimation}) no-repeat 0px / auto 100%;
    animation: ${sparkle} 1.2s steps(4) infinite;

    ${({ $isHover }) =>
      $isHover &&
      css`
        background-position: center;
        animation: none;
      `};
  }
`;

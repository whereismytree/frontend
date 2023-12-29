import styled, { css } from 'styled-components';
import tree from 'assets/tree_marker_focus.svg';

export const treeImage = ({ width, height }: { width?: string; height?: string }) => css`
  &::before {
    content: '';
    background: url(${tree}) no-repeat center / cover;
    background-position-y: -2px;
    display: inline-block;
    margin-right: 1rem;
    width: ${width};
    height: ${height};
    vertical-align: middle;
  }
`;

export const Title = styled.p<{ size?: number; $weight?: number; image?: boolean }>`
  font-size: ${({ size }) => (size ? `${size}rem` : '1.6rem')};
  font-weight: ${({ $weight }) => $weight || 800};
  line-height: 2.1rem;

  ${({ image }) => image && treeImage({ width: '1.6rem', height: '2.4rem' })}
`;

export const SubTitleFont = styled.p`
  font-size: 1.2rem;
  color: var(--grey-dark);
`;

export const SubTitle = styled(SubTitleFont)<{ weight?: number }>`
  font-weight: ${({ weight }) => weight || 300};
  line-height: 1.8rem;
`;

export const RightLineSpan = styled.span`
  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 1.5rem;
    vertical-align: middle;
    background-color: var(--grey-light);
    margin: 0 1rem;
  }
`;

export const Wrapper = styled.div<{ gap?: number }>`
  p:last-child {
    margin-top: ${({ gap }) => (gap ? `${gap}rem` : '0.4rem')};
  }
`;

export const TreeWrapper = styled.div`
  display: flex;
  align-items: center;
  ${treeImage({ width: '4.2rem', height: '4.2rem' })};
`;

export const Gap = styled.span`
  display: 'inline-block';
  width: '10px';
`;

import styled from 'styled-components';

export const RegistedTree = styled.article<{ $viewList: boolean }>`
  position: absolute;
  bottom: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  transition: 0.5s;

  transform: ${({ $viewList }) => !$viewList && 'translateY(100%)'};
`;

export const ViewButton = styled.button`
  z-index: 999;
  position: absolute;
  right: 14px;
  top: -30px;
  border: 1px solid var(--grey-light);
  background-color: #fff;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 1rem;
`;

export const RegistTreeList = styled.ul`
  max-height: calc(40vh);
  overflow: scroll;
`;

export const RegistTreeItem = styled.li`
  padding: 15px 24px;
  border-bottom: 1px solid var(--grey-light);
`;

export const Title = styled.h2`
  padding: 14px 25px;
  font-size: 1.4rem;
  font-weight: 800;
  border-bottom: 1px solid var(--grey-light);
`;

export const GreenText = styled.span`
  color: var(--main-green);
  margin-left: 10px;
`;

export const TitleSection = styled.div`
  padding: 14px 24px;
  border-bottom: 1px solid var(--grey-light);
`;

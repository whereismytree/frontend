import React from 'react';
import * as S from './style';

interface IResearchButtonProps {
  redrawTree: () => Promise<void>;
  setShowTreeInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResearchButton = ({ redrawTree, setShowTreeInfo }: IResearchButtonProps) => {
  const handleResearch = () => {
    redrawTree();
    setShowTreeInfo((prev) => (prev === true ? false : prev));
  };

  return (
    <S.Wrapper>
      <S.Button onClick={handleResearch}>현재 지도에서 트리 재검색</S.Button>
    </S.Wrapper>
  );
};

export default ResearchButton;

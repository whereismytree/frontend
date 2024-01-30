import React, { useState } from 'react';
import TreeLocationItem from 'components/TreeLocationItem';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import * as S from './style';

const TreeTitle = () => {
  const [isSave, setIsSave] = useState<boolean>(false);
  return (
    <S.Title>
      <TreeLocationItem location="서울특별시 송파구 올림픽로 300" distance={138}>
        롯데월드타워 트리
      </TreeLocationItem>
      <S.Btns>
        <SaveButton treeId={1} isSave={isSave} setIsSave={setIsSave} />
        <ShareButton treeId={1} treeName="롯데월드타워 트리" />
      </S.Btns>
    </S.Title>
  );
};

export default TreeTitle;

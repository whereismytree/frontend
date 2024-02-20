import React, { useState } from 'react';
import TreeLocationItem from 'components/TreeLocationItem';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import { ITreeItem } from 'types/apiResponse';
import * as S from '../style';

interface IProps {
  treeInfo: ITreeItem;
}

const TreeTitle = ({ treeInfo }: IProps) => {
  const [isSave, setIsSave] = useState<boolean>(false);
  return (
    <S.Title>
      <TreeLocationItem location={treeInfo.roadAddress} distance={138}>
        {treeInfo.name}
      </TreeLocationItem>
      <S.Btns>
        <SaveButton treeId={1} isSave={isSave} setIsSave={setIsSave} />
        <ShareButton treeId={1} treeName={treeInfo.name} />
      </S.Btns>
    </S.Title>
  );
};

export default TreeTitle;

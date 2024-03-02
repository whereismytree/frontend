import React from 'react';
import TreeLocationItem from 'components/TreeLocationItem';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import { ITreeItem } from 'types/apiResponse';
import * as S from '../style';

interface IProps {
  treeInfo: ITreeItem;
}

const TreeTitle = ({ treeInfo }: IProps) => {
  // TODO: 저장 기능 수정 필요
  return (
    <S.Title>
      <TreeLocationItem location={treeInfo.roadAddress} distance={138}>
        {treeInfo.name}
      </TreeLocationItem>
      <S.Btns>
        <SaveButton treeId={1} isFavorite={false} />
        <ShareButton treeId={1} treeName={treeInfo.name} />
      </S.Btns>
    </S.Title>
  );
};

export default TreeTitle;

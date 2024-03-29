import React from 'react';
import TreeLocationItem from 'components/TreeLocationItem';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import { useTreeData } from 'hooks/treeHooks';
import * as S from '../style';

interface IProps {
  treeId: number;
}

const TreeTitle = ({ treeId }: IProps) => {
  const data = useTreeData(String(treeId));

  return data ? (
    <S.Title>
      <TreeLocationItem location={data.roadAddress || data.streetAddress} distance={138}>
        {data.name}
      </TreeLocationItem>
      <S.Btns>
        <SaveButton treeId={treeId} isFavorite={data.isFavorite} />
        <ShareButton treeId={treeId} treeName={data.name} />
      </S.Btns>
    </S.Title>
  ) : null;
};

export default TreeTitle;

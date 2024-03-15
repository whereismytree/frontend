import React from 'react';
import TreeLocationItem from 'components/TreeLocationItem';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import { HTTPError } from 'error/HTTPError';
import * as S from '../style';

interface IProps {
  treeId: number;
}

const TreeTitle = ({ treeId }: IProps) => {
  const { data, isError, error } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  if (isError) {
    throw new HTTPError(`트리 정보를 불러오는데 오류가 발생했습니다. ${error}`);
  }

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

import { useState } from 'react';
import TreeReviewItem from 'components/TreeReviewItem';
import * as S from './style';

type ITreeList = {
  treeId: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  reviewsCount: number;
}[];

function TreeList({ list, type }: { list: ITreeList; type: 'registed' | 'saved' }) {
  const [viewList, setViewList] = useState<boolean>(true);

  return (
    <S.RegistedTree viewList={viewList}>
      <S.ViewButton type="button" onClick={() => setViewList((prev) => !prev)}>
        {viewList ? '지도' : '목록'}보기
      </S.ViewButton>
      <S.Title>
        {type === 'registed' ? '등록' : '저장'}한 트리<S.GreenText>{list.length}</S.GreenText>
      </S.Title>
      <S.RegistTreeList>
        {list.map(({ treeId, name, address, reviewsCount }) => (
          <S.RegistTreeItem key={treeId}>
            <TreeReviewItem location={address} reviewCount={reviewsCount}>
              {name}
            </TreeReviewItem>
          </S.RegistTreeItem>
        ))}
      </S.RegistTreeList>
    </S.RegistedTree>
  );
}

export default TreeList;

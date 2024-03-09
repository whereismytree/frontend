import TreeReviewItem from 'components/TreeReviewItem';
import ListTitle from 'components/common/ListTitle';
import { ITreeListItem } from 'types/TreeListApiResponse';
import * as S from './style';

function TreeList({ list, type }: { list: ITreeListItem[]; type: 'registed' | 'saved' }) {
  return (
    <>
      <S.TitleSection>
        <ListTitle count={list.length}>{type === 'registed' ? '등록' : '저장'}한 트리</ListTitle>
      </S.TitleSection>
      <S.RegistTreeList>
        {list.map(({ treeId, name, address, reviewsCount }) => (
          <S.RegistTreeItem key={treeId}>
            <TreeReviewItem location={address} reviewCount={reviewsCount}>
              {name}
            </TreeReviewItem>
          </S.RegistTreeItem>
        ))}
      </S.RegistTreeList>
    </>
  );
}

export default TreeList;

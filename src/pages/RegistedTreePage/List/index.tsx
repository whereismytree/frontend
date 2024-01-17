import { useState } from 'react';
import TreeReviewItem from 'components/TreeReviewItem';
import * as S from './style';

function RegistedTreeList() {
  const [viewMap, setViewMap] = useState<boolean>(false);

  const arr = new Array(30).fill(0).map((v, i) => i);

  return (
    <S.RegistedTree viewMap={viewMap}>
      <S.ViewButton type="button" onClick={() => setViewMap((prev) => !prev)}>
        {viewMap ? '목록' : '지도'}보기
      </S.ViewButton>
      <S.Title>
        등록한 트리<S.GreenText>10</S.GreenText>
      </S.Title>
      <S.RegistTreeList>
        {arr.map((v) => (
          <S.RegistTreeItem key={v}>
            <TreeReviewItem location="저쩌고저쩌고" reviewCount={30}>
              {`어쩌고${v}`}
            </TreeReviewItem>
          </S.RegistTreeItem>
        ))}
      </S.RegistTreeList>
    </S.RegistedTree>
  );
}

export default RegistedTreeList;

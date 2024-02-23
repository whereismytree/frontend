import React, { useState } from 'react';
import SearchInput from 'pages/MainPage/components/SearchInput';
import { ITreeItem } from 'types/apiResponse';
// import useApiQuery from 'hooks/useApiQuery';
import TreeImageItem from 'components/TreeImageItem';
import treeJSON from 'assets/treedata.json';
import * as S from './style';

export const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  // TODO: 추후 서버 통신으로 변경 필요, 현재는 서버에 데이터가 없어 JSON 활용했습니다
  const data: ITreeItem[] = treeJSON.trees;
  // const { data } = useApiQuery<ITreeItem[]>(`v1/trees/list?name=${keyword}&address=${keyword}`);

  return (
    <>
      <SearchInput setKeyword={setKeyword} />
      {data && keyword ? (
        <section>
          {data.map((tree) => {
            return (
              <S.ItemWrapper key={tree.name}>
                <TreeImageItem location={tree.roadAddress}>{tree.name}</TreeImageItem>
              </S.ItemWrapper>
            );
          })}
        </section>
      ) : null}
    </>
  );
};

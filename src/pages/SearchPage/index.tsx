import React, { useState } from 'react';
import SearchInput from 'pages/MainPage/components/SearchInput';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import TreeImageItem from 'components/TreeImageItem';
import * as S from './style';

export const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  // TODO: 조회안됨 백엔드 확인 필요!!
  const { data } = useApiQuery<ITreeItem[]>(`v1/trees/list?name=${keyword}&address=${keyword}`);

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

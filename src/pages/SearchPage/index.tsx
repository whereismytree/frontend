import React, { useState } from 'react';
import SearchInput from 'pages/MainPage/components/SearchInput';
import { IMainSearchResult } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import TreeImageItem from 'components/TreeImageItem';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

export const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  const { data } = useApiQuery<{ trees: IMainSearchResult[] }>(`v1/trees/list?query=${keyword}`);
  const navigate = useNavigate();
  const handleGoToTreeInfo = (id: number) => {
    navigate(`/tree/${id}`);
  };

  return (
    <>
      <SearchInput setKeyword={setKeyword} />
      {data && keyword ? (
        <S.Wrapper>
          {data.trees.map((tree) => {
            return (
              <S.ItemWrapper key={tree.name} onClick={() => handleGoToTreeInfo(tree.id)}>
                <TreeImageItem location={tree.address}>{tree.name}</TreeImageItem>
              </S.ItemWrapper>
            );
          })}
        </S.Wrapper>
      ) : null}
    </>
  );
};

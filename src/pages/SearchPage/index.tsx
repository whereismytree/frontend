import React, { useState } from 'react';
import SearchInput from 'pages/MainPage/components/SearchInput';
import { IMainSearchResult } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import TreeImageItem from 'components/TreeImageItem';
import { useNavigate } from 'react-router-dom';
import { HTTPError } from 'error/HTTPError';
import * as S from './style';

export const SearchPage = () => {
  const [keyword, setKeyword] = useState<string>('');
  const { data, isError, error } = useApiQuery<{ trees: IMainSearchResult[] }>(
    `v1/trees/list?query=${keyword}`,
  );

  if (isError) {
    throw new HTTPError(`검색 결과를 불러오는데 오류가 발생했습니다. ${error}`);
  }

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

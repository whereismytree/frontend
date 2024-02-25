import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from 'components/Topbar';
import TreeItem from 'components/TreeItem';
import Button from 'components/common/button';
import useApiMutation from 'hooks/useApiMutation';
import useApiQuery from 'hooks/useApiQuery';
import { IGetReview } from 'types/apiResponse';
import TagSelector from './components/TagSelector';
import ReviewForm from './components/ReviewForm';
import * as S from './style';

const validateTreeData = (treeData: any) => {
  if (!treeData || !treeData.treeName || !treeData.location) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
  }

  return treeData as { treeName: string; location: string; type: string };
};

const ReviewRegistAndEditPage = () => {
  const { pathname, state: treeData } = useLocation();
  const { treeName, location, type } = validateTreeData(treeData);
  const id = Number(pathname.split('/')[3]);
  const [tagIds, setTagIds] = useState<number[]>([]);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const { data } = useApiQuery<IGetReview>(`v1/reviews/${id}?reviewId=${id}`, type === 'edit');

  const { mutate: registMutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>(
    'v1/reviews',
    'POST',
    {
      onSuccess: (data) => {
        console.log('### 리뷰 등록! ###');
        console.log(data);
      },
      onError: (e, data) => {
        console.error(e);
        console.log(data);
      },
    },
  );

  const { mutate: editMutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>(
    `v1/reviews/${id}?reviewId=${id}`,
    'PUT',
    {
      onSuccess: (data) => {
        console.log('### 리뷰 수정! ###');
        console.log(data);
      },
      onError: (e, data) => {
        console.error(e);
        console.log(data);
      },
    },
  );

  const handleReviewRegistButton = () => {
    registMutate({ id, tagIds, content: contentRef.current?.value, imageUrl: '' });
  };

  const handleReviewEditButton = () => {
    editMutate({ tagIds, content: contentRef.current?.value, imageUrl: data?.reviewImageUrl });
  };

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Wrapper>
        <S.TreeInfo>
          <TreeItem location={location}>{treeName}</TreeItem>
        </S.TreeInfo>
        <TagSelector tagIds={tagIds} setTagIds={setTagIds} data={data} />
        <ReviewForm
          contentRef={contentRef}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
          data={data}
        />
      </S.Wrapper>
      <S.Button>
        {type === 'regist' ? (
          <Button onClick={handleReviewRegistButton}>후기 등록하기</Button>
        ) : (
          <Button onClick={handleReviewEditButton}>후기 수정하기</Button>
        )}
      </S.Button>
    </>
  );
};

export default ReviewRegistAndEditPage;

import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from 'components/Topbar';
import TreeItem from 'components/TreeItem';
import Button from 'components/common/button';
import useApiMutation from 'hooks/useApiMutation';
import TagSelector from './components/TagSelector';
import ReviewForm from './components/ReviewForm';
import * as S from './style';

const validateTreeData = (treeData: any) => {
  if (!treeData || !treeData.treeName || !treeData.location) {
    throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
  }

  return treeData as { treeName: string; location: string };
};

const ReviewRegistAndEditPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname, state: treeData } = useLocation();
  const { treeName, location } = validateTreeData(treeData);
  const treeId = Number(pathname.split('/')[3]);
  const [tagIds, setTagIds] = useState<number[]>([]);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const { mutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>('v1/reviews', 'POST', {
    onSuccess: (data) => {
      console.log('### 리뷰 등록! ###');
      console.log(data);
    },
    onError: (e, data) => {
      console.error(e);
      console.log(data);
    },
  });

  const handleReviewRegistButton = () => {
    mutate({ treeId, tagIds, content: contentRef.current?.value, imageUrl: '' });
  };

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Wrapper>
        <S.TreeInfo>
          <TreeItem location={location}>{treeName}</TreeItem>
        </S.TreeInfo>
        <TagSelector tagIds={tagIds} setTagIds={setTagIds} />
        <ReviewForm
          contentRef={contentRef}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      </S.Wrapper>
      <S.Button>
        <Button onClick={handleReviewRegistButton}>후기 등록하기</Button>
      </S.Button>
    </>
  );
};

export default ReviewRegistAndEditPage;

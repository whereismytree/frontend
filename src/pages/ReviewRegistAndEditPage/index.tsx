import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from 'components/Topbar';
import TreeItem from 'components/TreeItem';
import Button from 'components/common/button';
import useApiMutation from 'hooks/useApiMutation';
import TagSelector from './components/TagSelector';
import ReviewForm from './components/ReviewForm';
import * as S from './style';

// const validateTreeData = (treeData: any) => {
//   if (!treeData || !treeData.treeName || !treeData.location) {
//     throw new Error('리뷰 상세 페이지를 렌더링하기 위해 Navigate 객체에 state를 전달해주세요.');
//   }

//   return treeData as { treeName: string; location: string };
// };

const ReviewRegistAndEditPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { pathname, state: treeData } = useLocation();
  // const { treeName, location } = validateTreeData(treeData);
  const treeId = Number(pathname.split('/')[3]);
  const location = '서울 중구 퇴계로 77';
  const treeName = '명동 신세계 트리';
  const [tagIds, setTagIds] = useState<number[]>([]);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const { mutate } = useApiMutation<{ treeId: number; isFavorite: boolean }>('v1/reviews', 'POST', {
    onSuccess: (data) => console.log(data),
    onError: (e) => console.error(e),
  });

  const handleReviewRegistButton = () => {
    mutate(
      { treeId, tagIds, content: contentRef.current?.value, imageUrl: '' },
      {
        onSuccess: () => {
          console.log('### 리뷰 등록! ###');
          console.log(treeId);
          console.log(tagIds);
          console.log(contentRef.current?.value);
        },
        onError: (e) => {
          console.error(e);
        },
      },
    );
  };

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Wrapper>
        <S.TreeInfo>
          <TreeItem location={location}>{treeName}</TreeItem>
        </S.TreeInfo>
        <TagSelector tagIds={tagIds} setTagIds={setTagIds} />
        <ReviewForm contentRef={contentRef} />
      </S.Wrapper>
      <S.Button>
        <Button onClick={handleReviewRegistButton}>후기 등록하기</Button>
      </S.Button>
    </>
  );
};

export default ReviewRegistAndEditPage;

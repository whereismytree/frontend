import React from 'react';
import { useLocation } from 'react-router-dom';
import Topbar from 'components/Topbar';
import TreeItem from 'components/TreeItem';
import Button from 'components/common/button';
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
  const { state: treeData } = useLocation();
  // const { treeName, location } = validateTreeData(treeData);
  console.log(treeData);
  const location = '서울 중구 퇴계로 77';
  const treeName = '명동 신세계 트리';

  return (
    <>
      <Topbar.Icon type="tree" />
      <S.Wrapper>
        <S.TreeInfo>
          <TreeItem location={location}>{treeName}</TreeItem>
        </S.TreeInfo>
        <TagSelector />
        <ReviewForm />
      </S.Wrapper>
      <S.Button>
        <Button>후기 등록하기</Button>
      </S.Button>
    </>
  );
};

export default ReviewRegistAndEditPage;

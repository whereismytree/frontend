import React from 'react';
import defaultImg from 'assets/treeinfo-default.svg';
import useApiQuery from 'hooks/useApiQuery';
import { IReviewImages, ITreeItem } from 'types/apiResponse';
import { useNavigate } from 'react-router-dom';
import * as S from '../style';

interface IProps {
  treeInfo: ITreeItem;
}

const VisitorPhotoList = ({ treeInfo }: IProps) => {
  const id = 2;
  const { data, isError, error } = useApiQuery<IReviewImages>(`v1/reviews/images?treeId=${id}`);
  const navigate = useNavigate();

  if (isError) {
    console.error(error);
    // TODO: 통신 오류시 에러페이지 이동 ?
    // navigate('/error');
    return null;
  }

  const handleReviewPhoto = () => {
    navigate(`/review/${id}`, {
      state: { treeName: treeInfo.name, location: treeInfo.roadAddress },
    });
  };

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>방문자 사진</S.SubTitle>
        <S.Count>{data?.totalImages}</S.Count>
      </S.TitleContainer>
      <S.PhotoList>
        {data?.totalImages !== 0 ? (
          data?.images.map((e) => {
            return <S.Photo key={e.reviewId} src={e.imageUrl} onClick={handleReviewPhoto} />;
          })
        ) : (
          <S.Photo src={defaultImg} />
        )}
      </S.PhotoList>
      {data?.totalImages && data.totalImages > 6 ? (
        <S.PhotoMoreButton>방문자 사진 더보기</S.PhotoMoreButton>
      ) : null}
    </S.Wrapper>
  );
};

export default VisitorPhotoList;

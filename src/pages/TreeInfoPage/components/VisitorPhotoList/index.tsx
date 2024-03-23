import React from 'react';
import defaultImg from 'assets/treeinfo-default.svg';
import useApiQuery from 'hooks/useApiQuery';
import { IReviewImages, ITreeItem } from 'types/apiResponse';
import { useNavigate } from 'react-router-dom';
import { HTTPError } from 'error/HTTPError';
import * as S from '../style';

interface IProps {
  treeId: number;
  treeInfo: ITreeItem;
}

const VisitorPhotoList = ({ treeId, treeInfo }: IProps) => {
  const { data, isError } = useApiQuery<IReviewImages>(`v1/reviews/images?treeId=${treeId}`);
  const navigate = useNavigate();

  if (isError) {
    throw new HTTPError(`리뷰 정보를 불러오는데 오류가 발생했습니다`);
  }

  const handleReviewPhoto = (reviewId: number) => {
    navigate(`/review/${reviewId}`, {
      state: { treeName: treeInfo.name, location: treeInfo.roadAddress || treeInfo.streetAddress },
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
            return (
              <S.Photo
                key={e.reviewId}
                src={e.imageUrl}
                onClick={() => handleReviewPhoto(e.reviewId)}
              />
            );
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

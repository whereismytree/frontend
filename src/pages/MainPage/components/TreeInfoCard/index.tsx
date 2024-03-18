import React from 'react';
import { ITreeItem, IReviewImages } from 'types/apiResponse';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import defaultImg from 'assets/treeinfo-default.svg';
import { useNavigate } from 'react-router-dom';
import useApiQuery from 'hooks/useApiQuery';
import TreeLocationItem from 'components/TreeLocationItem';
import { HTTPError } from 'error/HTTPError';
import * as S from './style';

interface IProps {
  id: number;
}

const TreeInfoCard = ({ id }: IProps) => {
  const {
    data: treeInfo,
    isError: isInfoError,
    error: infoError,
  } = useApiQuery<ITreeItem>(`v1/trees/${id}`);
  const {
    data: reviewImages,
    isError: isReviewImagesError,
    error: reviewImagesError,
  } = useApiQuery<IReviewImages>(`v1/reviews/images?treeId=${id}`);
  const navigate = useNavigate();

  if (isInfoError) {
    throw new HTTPError(`트리 정보를 불러오는데 오류가 발생했습니다. ${infoError}`);
  }
  if (isReviewImagesError) {
    throw new HTTPError(`리뷰 이미지를 불러오는데 오류가 발생했습니다. ${reviewImagesError}`);
  }

  const handleGoToTreeInfo = () => {
    navigate(`/tree/${id}`);
  };

  return treeInfo ? (
    <S.Wrapper>
      <S.Title onClick={handleGoToTreeInfo}>
        <TreeLocationItem location={treeInfo.roadAddress || treeInfo.streetAddress} distance={138}>
          {treeInfo.name}
        </TreeLocationItem>
      </S.Title>
      <S.Btns>
        <SaveButton treeId={id} isFavorite={treeInfo.isFavorite} />
        <ShareButton treeId={treeInfo.treeId} treeName={treeInfo.name} />
      </S.Btns>
      <S.Images onClick={handleGoToTreeInfo}>
        {reviewImages && reviewImages.images.length > 0 ? (
          reviewImages.images.slice(0, 3).map((e) => {
            return <img key={e.reviewId} src={e.imageUrl} alt="트리 리뷰 이미지" />;
          })
        ) : (
          <img src={defaultImg} alt="트리 기본 이미지" />
        )}
      </S.Images>
    </S.Wrapper>
  ) : null;
};

export default TreeInfoCard;

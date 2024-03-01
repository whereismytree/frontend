import React, { useState } from 'react';
import { ITreeItem } from 'types/apiResponse';
import SaveButton from 'components/SaveButton';
import ShareButton from 'components/ShareButton';
import defaultImg from 'assets/treeinfo-default.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

interface IProps {
  data: ITreeItem | null;
}

const TreeInfoCard = ({ data }: IProps) => {
  const [isSave, setIsSave] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleGoToTreeInfo = () => {
    navigate(`/tree/${data?.treeId}`);
  };

  return data ? (
    <S.Wrapper>
      <S.Title onClick={handleGoToTreeInfo}>
        <S.Name>{data.name}</S.Name>
        <S.Address>
          <span>158m</span>
          {data.roadAddress}
        </S.Address>
      </S.Title>
      <S.Btns>
        <SaveButton treeId={data.treeId} isSave={isSave} setIsSave={setIsSave} />
        <ShareButton treeId={data.treeId} treeName={data.name} />
      </S.Btns>
      <S.Images onClick={handleGoToTreeInfo}>
        <img src={defaultImg} alt="트리 기본 이미지" />
        {/* {Images.map(([src, alt], idx) => (
          <img key={idx} src={src} alt={alt} />
        ))} */}
      </S.Images>
    </S.Wrapper>
  ) : null;
};

export default TreeInfoCard;
import React, { useState } from 'react';
import { ITreeItem } from 'types/apiResponse';
import ImageButton from 'components/ImageButton';
import defaultImg from 'assets/treeinfo-default.svg';
import * as S from './style';

interface IProps {
  data: ITreeItem | null;
}

const TreeInfoCard = ({ data }: IProps) => {
  const [isSave, setIsSave] = useState<boolean>(false);

  return data ? (
    <S.Wrapper>
      <S.Title>
        <S.Name>{data.name}</S.Name>
        <S.Address>
          <span>158m</span>
          {data.roadAddress}
        </S.Address>
      </S.Title>
      <S.Btns>
        <ImageButton.Save isSave={isSave} setIsSave={setIsSave} />
        <ImageButton.Share />
      </S.Btns>
      <S.Images>
        <img src={defaultImg} alt="트리 기본 이미지" />
        {/* {Images.map(([src, alt], idx) => (
          <img key={idx} src={src} alt={alt} />
        ))} */}
      </S.Images>
    </S.Wrapper>
  ) : null;
};

export default TreeInfoCard;

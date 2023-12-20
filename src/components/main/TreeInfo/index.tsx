import React from 'react';
import { ITreeItem } from 'pages/MainPage';
import * as S from './style';

interface IProps {
  data: ITreeItem | null;
}

const TreeInfo = ({ data }: IProps) => {
  console.log(data);

  return (
    <>
      {data && (
        <S.Wrapper>
          <S.Title>
            <S.Name>{data.name}</S.Name>
            <S.Address>
              <span>158m</span>
              {data.roadAddress}
            </S.Address>
          </S.Title>
          <S.Images>
            {/* {Images.map(([src, alt], idx) => (
              <img key={idx} src={src} alt={alt} />
            ))} */}
          </S.Images>
          <S.Btns>
            {/* <SaveButton />
            <ShareButton /> */}
          </S.Btns>
        </S.Wrapper>
      )}
      ;
    </>
  );
};

export default TreeInfo;

import React from 'react';
import saveIcon from 'assets/save-icon.svg';
import shareIcon from 'assets/share-icon.svg';
import * as S from './style';

interface IImageButtonProps {
  type: string;
  onClick?: () => void;
}

const ImageButton = ({ type, onClick }: IImageButtonProps) => {
  const imgSrc = type === '저장' ? saveIcon : shareIcon;

  return (
    <S.Wrapper onClick={onClick}>
      <S.Img src={imgSrc} alt={type} />
      <S.Text>{type}</S.Text>
    </S.Wrapper>
  );
};

const SaveButton = () => {
  return <ImageButton type="저장" />;
};

const ShareButton = () => {
  return <ImageButton type="공유" />;
};

ImageButton.Save = SaveButton;
ImageButton.Share = ShareButton;

export default ImageButton;

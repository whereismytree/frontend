import React, { useState } from 'react';
import saveIcon from 'assets/save-icon.svg';
import fullSaveIcon from 'assets/full-save-icon.svg';
import shareIcon from 'assets/share-icon.svg';
import urlIcon from 'assets/url-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';
import * as S from './style';

interface IImageButtonProps {
  type: string;
  imgSrc: string;
  onClick?: () => void;
}

const ImageButton = ({ type, imgSrc, onClick }: IImageButtonProps) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.Img src={imgSrc} alt={type} />
      <S.Text>{type}</S.Text>
    </S.Wrapper>
  );
};

interface ISaveButtonProps {
  isSave: boolean;
  setIsSave: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveButton = ({ isSave, setIsSave }: ISaveButtonProps) => {
  const imgSrc = isSave ? fullSaveIcon : saveIcon;
  const handleSaveButton = () => {
    setIsSave((prev) => !prev);
  };

  return <ImageButton type="저장" imgSrc={imgSrc} onClick={handleSaveButton} />;
};

const ShareButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShareButton = () => {
    setShowModal((prev) => !prev);
  };
  const generateModalItem = (src: string, alt: string, text: string) => {
    return (
      <S.ModalItem>
        <S.ModalIcon src={src} alt={alt} />
        <S.ModalText>{text}</S.ModalText>
      </S.ModalItem>
    );
  };

  return (
    <>
      <ImageButton imgSrc={shareIcon} type="공유" onClick={handleShareButton} />
      {showModal && (
        <S.Modal>
          {generateModalItem(urlIcon, 'url 공유', 'URL 복사')}
          {generateModalItem(kakaoIcon, 'kakao 공유', '카카오톡')}
        </S.Modal>
      )}
    </>
  );
};

ImageButton.Save = SaveButton;
ImageButton.Share = ShareButton;

export default ImageButton;

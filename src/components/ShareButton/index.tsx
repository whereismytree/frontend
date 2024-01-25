import { useState } from 'react';
import shareIcon from 'assets/share-icon.svg';
import urlIcon from 'assets/url-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';
import * as S from './style';

interface IModalIconProps {
  src: string;
  alt: string;
  text: string;
}

const ModalIcon = ({ src, alt, text }: IModalIconProps) => {
  return (
    <S.ModalItem>
      <S.ModalIcon src={src} alt={alt} />
      <S.ModalText>{text}</S.ModalText>
    </S.ModalItem>
  );
};

const ShareButton = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShareButton = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper onClick={handleShareButton}>
        <S.Img src={shareIcon} alt="공유" />
        <S.Text>공유</S.Text>
      </S.Wrapper>
      {showModal && (
        <S.Modal>
          <ModalIcon src={urlIcon} alt="url 공유" text="URL 복사" />
          <ModalIcon src={kakaoIcon} alt="kakao 공유" text="카카오톡" />
        </S.Modal>
      )}
    </>
  );
};

export default ShareButton;

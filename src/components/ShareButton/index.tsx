import { useEffect, useState } from 'react';
import shareIcon from 'assets/share-icon.svg';
import urlIcon from 'assets/url-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';
import * as S from './style';

interface IModalIconProps {
  onClick: () => void;
  src: string;
  alt: string;
  text: string;
}

interface IShareButtonProps {
  treeId: number;
  treeName: string;
}

const ModalIcon = ({ onClick, src, alt, text }: IModalIconProps) => {
  return (
    <S.ModalItem onClick={onClick}>
      <S.ModalIcon src={src} alt={alt} />
      <S.ModalText>{text}</S.ModalText>
    </S.ModalItem>
  );
};

const ShareButton = ({ treeId, treeName }: IShareButtonProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleShareButton = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    }
  }, []);

  const handleCopyButton = () => {
    const url = `http://localhost:3000/tree/${treeId}`;
    navigator.clipboard.writeText(url).then(() => {
      // eslint-disable-next-line no-alert
      alert('클립보드 복사 완료!');
    });
  };

  const handleKakaoShareButton = () => {
    window.Kakao.Share.sendCustom({
      templateId: 103468,
      templateArgs: {
        tree: treeName,
      },
    });
  };

  return (
    <>
      <S.Wrapper onClick={handleShareButton}>
        <S.Img src={shareIcon} alt="공유" />
        <S.Text>공유</S.Text>
      </S.Wrapper>
      {showModal && (
        <S.Modal>
          <ModalIcon onClick={handleCopyButton} src={urlIcon} alt="url 공유" text="URL 복사" />
          <ModalIcon
            onClick={handleKakaoShareButton}
            src={kakaoIcon}
            alt="kakao 공유"
            text="카카오톡"
          />
        </S.Modal>
      )}
    </>
  );
};

export default ShareButton;

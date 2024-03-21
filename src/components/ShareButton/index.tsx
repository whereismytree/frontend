import { useEffect, useState } from 'react';
import shareIcon from 'assets/share-icon.svg';
import urlIcon from 'assets/url-icon.svg';
import kakaoIcon from 'assets/kakao-icon.svg';
import useSnackBar from 'hooks/useSnackBar';
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
  const { SnackBar, render } = useSnackBar();
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
    const domain = 'https://whereismytree.me';
    navigator.clipboard.writeText(`${domain}/tree/${treeId}`).then(() => {
      render(3);
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
      <SnackBar>링크가 복사되었습니다</SnackBar>
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

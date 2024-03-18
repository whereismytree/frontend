import * as S from './style';

function ReviewImage({ src }: { src: string }) {
  return (
    <S.ImageWrapper>
      <S.Image src={src} alt="리뷰 이미지" />
    </S.ImageWrapper>
  );
}

export default ReviewImage;

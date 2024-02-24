import React, { useState } from 'react';
import photoIcon from 'assets/photo-icon.svg';
import * as S from './style';

interface IReviewFormProp {
  contentRef: React.RefObject<HTMLTextAreaElement>;
}
const ReviewForm = ({ contentRef }: IReviewFormProp) => {
  const [textLength, setTextLength] = useState<number>(
    contentRef.current ? contentRef.current.value.length : 0,
  );
  const handleOnInput = () => {
    if (contentRef.current) {
      setTextLength(contentRef.current.value.length);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>리뷰를 남겨주세요</S.Title>
      <S.ButtonContainer>
        <S.PhotoButton>
          <S.PhotoIcon src={photoIcon} alt="사진 추가하기" />
          사진 추가하기
        </S.PhotoButton>
      </S.ButtonContainer>
      <S.TextBox
        ref={contentRef}
        onInput={handleOnInput}
        placeholder="트리를 구경한 소감이 어땠는지 알려주세요."
        maxLength={400}
      />
      <S.TextLength>
        <strong>{textLength}</strong> / 400
      </S.TextLength>
    </S.Wrapper>
  );
};

export default ReviewForm;

import React, { useState } from 'react';
import photoIcon from 'assets/photo-icon.svg';
import test from 'assets/treeinfo-default.svg';
import * as S from './style';

interface IReviewFormProp {
  contentRef: React.RefObject<HTMLTextAreaElement>;
}
const ReviewForm = ({ contentRef }: IReviewFormProp) => {
  const [textLength, setTextLength] = useState<number>(
    contentRef.current ? contentRef.current.value.length : 0,
  );
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleOnInput = () => {
    if (contentRef.current) {
      setTextLength(contentRef.current.value.length);
    }
  };

  const handleDeletePhoto = () => {
    setSelectedFiles(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.persist();
    console.log(selectedFiles);
    console.log(e.target.files);
    setSelectedFiles(e.target.files);
  };

  return (
    <S.Wrapper>
      <S.Title>리뷰를 남겨주세요</S.Title>
      {selectedFiles ? (
        <S.PhotoContainer>
          <S.Photo src={test} alt="ff" />
          <S.PhotoDeleteButton onClick={handleDeletePhoto} />
        </S.PhotoContainer>
      ) : (
        <S.ButtonContainer>
          <S.PhotoInput
            type="file"
            name="images"
            accept=".png, .jpg,image/*"
            id="photo-upload"
            onChange={(e) => handleFileChange(e)}
          />
          <S.PhotoButton htmlFor="photo-upload">
            <S.PhotoIcon src={photoIcon} alt="사진 추가하기" />
            사진 추가하기
          </S.PhotoButton>
        </S.ButtonContainer>
      )}
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

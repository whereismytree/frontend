import { useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ProfileImage from 'components/common/ProfileImage';
import usePreviewImage from 'hooks/usePreviewImage';
import * as S from './style';

function ProfileImageSetting() {
  const { setValue } = useFormContext();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const previewImage = usePreviewImage(imageFile);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const randomProfileImageURL = useRef(generateRandomProfileImageURL());

  // 초기 로딩시 사용자의 프로필 이미지를 임의의 랜덤한 프로필 이미지로 설정합니다.
  useEffect(() => {
    setValue('profileImage', randomProfileImageURL.current);
  }, []);

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (input: EventTarget & HTMLInputElement) => {
    if (input.files && input.files[0]) {
      setImageFile(input.files[0]);
    }
  };

  return (
    <>
      <S.ImageInput
        type="file"
        accept="image/*"
        alt="프로필 이미지"
        className="hidden"
        ref={imageInputRef}
        onChange={(e) => {
          handleImageChange(e.target);
        }}
      />
      <ProfileImage
        src={previewImage || randomProfileImageURL.current}
        style={{ WebkitUserSelect: 'none', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
    </>
  );
}

const generateRandomProfileImageURL = () => {
  const randomProfileImages = [
    'https://jypbasebucket.s3.ap-northeast-2.amazonaws.com/images/20240309171943.blob',
    'https://jypbasebucket.s3.ap-northeast-2.amazonaws.com/images/20240309172017.blob',
    'https://jypbasebucket.s3.ap-northeast-2.amazonaws.com/images/20240309172047.blob',
    'https://jypbasebucket.s3.ap-northeast-2.amazonaws.com/images/20240309172101.blob',
    'https://jypbasebucket.s3.ap-northeast-2.amazonaws.com/images/20240309172110.blob',
  ];

  return randomProfileImages[Math.floor(Math.random() * randomProfileImages.length)];
};

export default ProfileImageSetting;

import ProfileImage from 'components/common/ProfileImage';
import defaultProfile from 'assets/random_profile_1.png';
import { useRef, useState } from 'react';
import * as S from './style';

function ProfileImageSetting() {
  // TODO: 이미지 미리보기 기능까지만 구현되어 있으니, 백엔드에서 이미지 업로드 구현 완료되면 이미지 URL을 서버로 넘길 수 있도록 코드 수정 필요합니다.
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [imageSrc, setImageSrc] = useState(defaultProfile);

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleImageChange = (input: EventTarget & HTMLInputElement) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(input.files[0]);
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
        src={imageSrc}
        style={{ WebkitUserSelect: 'none', cursor: 'pointer' }}
        onClick={handleImageClick}
      />
    </>
  );
}

export default ProfileImageSetting;

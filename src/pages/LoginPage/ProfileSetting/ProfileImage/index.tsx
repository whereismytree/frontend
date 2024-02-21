import ProfileImage from 'components/common/ProfileImage';
import defaultProfile from 'assets/random_profile_1.png';

function ProfileImageSetting() {
  // {/* TODO: 프로필 이미지 설정 기능 추가해야 합니다. */}
  return (
    <>
      <input type="image" alt="" />
      <ProfileImage src={defaultProfile} />
    </>
  );
}

export default ProfileImageSetting;

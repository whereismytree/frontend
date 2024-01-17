import OptionList from 'components/MyPage/OptionList';

function OptionListSection() {
  return (
    <OptionList>
      <OptionList.Option>문의하기 / 신고하기</OptionList.Option>
      <OptionList.Option>이용약관</OptionList.Option>
      <OptionList.Option>개인정보처리방침</OptionList.Option>
      <OptionList.DangerOption>로그아웃</OptionList.DangerOption>
      <OptionList.DangerOption>탈퇴하기</OptionList.DangerOption>
    </OptionList>
  );
}

export default OptionListSection;

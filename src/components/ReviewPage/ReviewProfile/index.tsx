import ProfileImage from 'components/common/ProfileImage';
import Item from 'components/common/Item';
import isValidDate from 'utils/isValidDate';
import { InvalidDateError } from 'error/HumanError';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import * as S from './style';

const parseCreateDate = (createDate: string) => {
  const date = new Date(createDate);

  if (!isValidDate(date)) {
    throw new InvalidDateError(
      '리뷰 작성 상세 페이지 리뷰 작성 시간이 올바른 양식이 아닙니다.',
      createDate,
    );
  }

  return formatDateWithDayOfWeek(date, '.').slice(2).replace(/\(|\)/g, ' ').trim();
};

function ReviewProfile({
  profileImageSrc,
  nickname,
  createDate,
  canEdit,
  canRemove,
  children,
}: {
  profileImageSrc: string;
  nickname: string;
  createDate: string;
  canEdit: boolean;
  canRemove: boolean;
  children: JSX.Element;
}) {
  const canEditOrRemove = canEdit && canRemove;

  return (
    <S.ReviewProfile>
      <ProfileImage size="sm" src={profileImageSrc} />
      <Item gap={0.4}>
        <S.NickName>{nickname}</S.NickName>
        <S.CreateTime>{parseCreateDate(createDate)}</S.CreateTime>
      </Item>
      {canEditOrRemove && children}
    </S.ReviewProfile>
  );
}

export default ReviewProfile;

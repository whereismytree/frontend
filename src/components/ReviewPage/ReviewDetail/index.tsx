import React from 'react';
import Item from 'components/common/Item';
import ProfileImage from 'components/common/ProfileImage';
import { DateIsNotValidError } from 'types/ErrorTypes';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import isValidDate from 'utils/isValidDate';
import OptionList from './OptionList';
import VerticalButton from '../../common/KebabButton';
import * as S from './style';

const parseCreateDate = (createDate: string) => {
  const date = new Date(createDate);

  if (!isValidDate(date)) {
    throw new DateIsNotValidError(
      '리뷰 작성 상세 페이지 리뷰 작성 시간이 올바른 양식이 아닙니다.',
      createDate,
    );
  }

  return formatDateWithDayOfWeek(date, '.').slice(2).replace(/\(|\)/g, ' ').trim();
};

function ReviewDetail({
  nickname,
  reviewText,
  createdAt,
  profileImageSrc,
  tags,
  canEdit = false,
  canRemove = false,
}: {
  nickname: string;
  reviewText: string;
  createdAt: string;
  profileImageSrc: string;
  tags: string[];
  canEdit?: boolean;
  canRemove?: boolean;
}) {
  const createDate = parseCreateDate(createdAt);
  const userCanEditOrRemove = canEdit && canRemove;

  return (
    <>
      <S.ReviewProfile>
        <ProfileImage size="sm" src={profileImageSrc} />
        <Item gap={0.4}>
          <S.NickName>{nickname}</S.NickName>
          <S.CreateTime>{createDate}</S.CreateTime>
        </Item>
        {userCanEditOrRemove && <VerticalButton onClick={() => {}} />}
        <OptionList />
      </S.ReviewProfile>
      <S.ReviewText>{reviewText}</S.ReviewText>
      <S.Tags>{tags.map((tag) => tag)}</S.Tags>
    </>
  );
}

export default ReviewDetail;

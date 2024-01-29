import React from 'react';
import { useReviewContext } from 'pages/ReviewDetailPage/context';
import Item from 'components/common/Item';
import ProfileImage from 'components/common/ProfileImage';
import { DateIsNotValidError } from 'types/ErrorTypes';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import isValidDate from 'utils/isValidDate';
import * as S from './style';
import DropDown from './DropDown';

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
  onDelete = () => {},
}: {
  nickname: string;
  reviewText: string;
  createdAt: string;
  profileImageSrc: string;
  tags: string[];
  canEdit?: boolean;
  canRemove?: boolean;
  onDelete: () => void;
}) {
  const { dispatch } = useReviewContext();
  const createDate = parseCreateDate(createdAt);
  const userCanEditOrRemove = canEdit && canRemove;

  const closeDropDown = () => {
    dispatch({ type: 'DROPDOWN_OPEN', payload: false });
  };

  return (
    <>
      <S.ReviewProfile>
        <ProfileImage size="sm" src={profileImageSrc} />
        <Item gap={0.4}>
          <S.NickName>{nickname}</S.NickName>
          <S.CreateTime>{createDate}</S.CreateTime>
        </Item>
        {userCanEditOrRemove && (
          <DropDown>
            <DropDown.Toggle />
            <DropDown.List>
              <DropDown.Item
                onClick={() => {
                  closeDropDown();
                  console.log('공유!');
                }}
              >
                공유하기
              </DropDown.Item>
              <DropDown.Item onClick={() => console.log('공유!')}>수정하기</DropDown.Item>
              <DropDown.Item onClick={() => onDelete()}>삭제하기</DropDown.Item>
            </DropDown.List>
          </DropDown>
        )}
      </S.ReviewProfile>
      <S.ReviewText>{reviewText}</S.ReviewText>
      <S.Tags>{tags.map((tag) => tag)}</S.Tags>
    </>
  );
}

export default ReviewDetail;

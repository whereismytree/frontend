/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect } from 'react';
import Item from 'components/common/Item';
import ProfileImage from 'components/common/ProfileImage';
import { DateIsNotValidError } from 'types/ErrorTypes';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import isValidDate from 'utils/isValidDate';
import vertical from 'assets/vertical_ellipsis.svg';
import reviewDetailContext, { ReviewProvider, useReviewContext } from './context';
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

function Option({ children }: { children: string }) {
  return (
    <S.Option>
      <button type="button">{children}</button>
    </S.Option>
  );
}

function OptionList() {
  const {
    state: { optionOpen },
    dispatch,
  } = useReviewContext();

  return optionOpen ? (
    <S.OptionList>
      <Option>공유하기</Option>
      <Option>수정하기</Option>
      <Option>삭제하기</Option>
    </S.OptionList>
  ) : null;
}

function VerticalButton() {
  const {
    state: { optionOpen },
    dispatch,
  } = useReviewContext();

  const handleClick = () => {
    dispatch({ type: 'OPTION_OPEN', payload: !optionOpen });
  };

  return (
    <S.VerticalButton open={optionOpen} onClick={() => handleClick()}>
      <img src={vertical} alt="더보기" />
    </S.VerticalButton>
  );
}

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
    <ReviewProvider>
      <S.ReviewProfile>
        <ProfileImage size="sm" src={profileImageSrc} />
        <Item gap={0.4}>
          <S.NickName>{nickname}</S.NickName>
          <S.CreateTime>{createDate}</S.CreateTime>
        </Item>
        {userCanEditOrRemove && <VerticalButton />}
        <OptionList />
      </S.ReviewProfile>
      <S.ReviewText>{reviewText}</S.ReviewText>
      <S.Tags>{tags.map((tag) => tag)}</S.Tags>
    </ReviewProvider>
  );
}

export default ReviewDetail;

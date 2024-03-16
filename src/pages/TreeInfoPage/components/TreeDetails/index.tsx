import React from 'react';
import { ITreeItem } from 'types/apiResponse';
import useApiQuery from 'hooks/useApiQuery';
import { HTTPError } from 'error/HTTPError';
import * as S from '../style';

interface IProps {
  treeId: string;
}

const TreeDetails = ({ treeId }: IProps) => {
  const { data, isError, error } = useApiQuery<ITreeItem>(`v1/trees/${treeId}`);

  if (isError) {
    throw new HTTPError(`트리 정보를 불러오는데 오류가 발생했습니다. ${error}`);
  }

  // 전시기간을 형식에 맞게 포맷팅하는 함수
  const formatExhibitionDates = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const dayOfWeek = daysOfWeek[date.getDay()];

      return `${year}.${month < 10 ? `0${month}` : month}.${
        day < 10 ? `0${day}` : day
      }(${dayOfWeek})`;
    };

    return `${formatDate(startDate)} ~ ${formatDate(endDate)}`;
  };

  let info;
  if (data) {
    info = [
      data.spaceType && data.spaceType === 'UNKNOWN'
        ? null
        : ['공간', data.spaceType === 'INDOOR' ? '실내' : '야외 '],
      data.businessDays && ['영업일', data.businessDays?.replace(/,/g, ', ')],
      data.exhibitionStartDate &&
        data.exhibitionEndDate && [
          '전시 기간',
          formatExhibitionDates(data.exhibitionStartDate, data.exhibitionEndDate),
        ],
      data.isPet && ['반려동물', data.isPet ? '동반 가능' : '동반 불가능'],
      data.extraInfo && ['참고정보', data.extraInfo],
    ];
  }

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.SubTitle>트리 정보</S.SubTitle>
        <S.EditInfoButton>✎ 정보 수정 제안하기</S.EditInfoButton>
      </S.TitleContainer>
      <S.Details>
        {info && info.length !== 0 ? (
          info.map((item) => {
            return item && item[0] ? (
              <S.DetailItem key={item[0]}>
                <S.ItemTitle>{item[0]}</S.ItemTitle>
                <S.ItemContent>{item[1]}</S.ItemContent>
              </S.DetailItem>
            ) : null;
          })
        ) : (
          <S.DetailItem style={{ color: ' #878787' }}>정보가 없습니다.</S.DetailItem>
        )}
      </S.Details>
    </S.Wrapper>
  );
};

export default TreeDetails;

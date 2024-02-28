import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { RangeKeyDict } from 'react-date-range';
import formatDate from 'utils/dateUtils/formatDate';
import getDayOfWeek from 'utils/dateUtils/getDayofWeek';
import Button, { WhiteButton } from 'components/common/button';
import Calendar from '../common/Calendar';
import Label from '../common/Label';
import * as S from './style';

function ExhibitionDateCalendar() {
  const formKey = {
    startDate: 'exhibitionStartDate',
    endDate: 'exhibitionEndDate',
  };
  const { setValue, watch } = useFormContext();
  const [viewCalendar, setViewCalendar] = useState(false);
  const [date, setDate] = useState<{ startDate?: Date; endDate?: Date }>({
    startDate: undefined,
    endDate: undefined,
  });
  const [displayDate, setDisplayDate] = useState({
    startDate: '',
    endDate: '',
  });

  const formStateStartDate: Date = watch(formKey.startDate);
  const formStateEndDate: Date = watch(formKey.endDate);
  const isUserSelectRange = date.startDate && date.endDate;
  const isUserUpdateToForm = formStateStartDate && formStateEndDate;

  useEffect(() => {
    if (date.startDate && date.endDate) {
      const { startDate, endDate } = convertDateRangeToString(date.startDate, date.endDate);

      setDisplayDate({ startDate, endDate });
    }
  }, [date.startDate, date.endDate]);

  useEffect(() => {
    if (formStateStartDate && formStateEndDate) {
      const { startDate, endDate } = convertDateRangeToString(formStateStartDate, formStateEndDate);

      setDisplayDate({ startDate, endDate });
    }
  }, [viewCalendar, formStateStartDate, formStateEndDate]);

  const setExhibitionDateFormValue = useCallback(
    (start?: Date, end?: Date) => {
      setValue(formKey.startDate, start);
      setValue(formKey.endDate, end);
    },
    [setValue, formKey.startDate, formKey.endDate],
  );

  useEffect(() => {
    setExhibitionDateFormValue();
  }, [setExhibitionDateFormValue]);

  const resetDateState = () => {
    setDate({ startDate: undefined, endDate: undefined });
  };

  const handleRangeChange = (item: RangeKeyDict) => {
    const { startDate, endDate } = Object.values(item)[0];

    if (startDate && endDate) {
      setDate({ startDate, endDate });
    }
  };

  const handleDateDisplayClick = () => {
    setViewCalendar(true);
  };

  const handleSubmit = () => {
    setExhibitionDateFormValue(date.startDate, date.endDate);
    setViewCalendar(false);
    resetDateState();
  };

  const handleCancel = () => {
    setViewCalendar(false);
    resetDateState();
  };

  return (
    <>
      <Label optional>전시 기간</Label>
      <S.DateDisplay type="button" onClick={handleDateDisplayClick}>
        {isUserSelectRange || isUserUpdateToForm ? (
          `${displayDate.startDate} ~ ${displayDate.endDate}`
        ) : (
          <span>선택 안 함</span>
        )}
      </S.DateDisplay>
      {viewCalendar && (
        <S.CalendarWrapper>
          <Calendar
            ranges={[
              {
                startDate: date.startDate || formStateStartDate || new Date(),
                endDate: date.endDate || formStateEndDate || new Date(),
              },
            ]}
            onChange={handleRangeChange}
          />
          <S.CalendarButton>
            <WhiteButton.Small onClick={handleCancel}>취소하기</WhiteButton.Small>
            <Button.Small onClick={handleSubmit} disabled={!isUserSelectRange}>
              선택하기
            </Button.Small>
          </S.CalendarButton>
        </S.CalendarWrapper>
      )}
    </>
  );
}

const formatDateWithWeekday = (date: string, dayOfWeek: string) => `${date} (${dayOfWeek})`;

const convertDateRangeToString = (startDate: Date, endDate: Date) => {
  const startDateText = formatDateWithWeekday(
    formatDate(startDate, '.'),
    getDayOfWeek(startDate.getDay()),
  );
  const endDateText = formatDateWithWeekday(
    formatDate(endDate, '.'),
    getDayOfWeek(endDate.getDay()),
  );

  return { startDate: startDateText, endDate: endDateText };
};

export default ExhibitionDateCalendar;

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import * as locales from 'date-fns/locale';
import formatDateWithDayOfWeek from 'utils/formatDateWithDayOfWeek';
import Button from 'components/common/button';
import IInputProps from 'types/InputProps';
import * as S from './style';
import * as CommonS from '../style';

interface IDateInputProps extends IInputProps {
  setValue: ReturnType<typeof useForm>['setValue'];
}

const initialRange = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  },
];

function DateRangeInput({ name, required = false, children, setValue }: IDateInputProps) {
  const { control, getValues } = useFormContext();
  const [viewCalendar, setViewCalendar] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<Range[]>(initialRange);
  const [disabled, setDisabled] = useState<boolean>(true);
  const assign = !!getValues(name);

  useEffect(() => {
    setValue(name, '');
  }, [name, setValue]);

  const cancel = () => {
    setViewCalendar(false);
  };

  const submit = () => {
    setViewCalendar(false);
    setValue(name, dateRange);
  };

  const dateDisplayText =
    viewCalendar || assign ? (
      `${formatDateWithDayOfWeek(
        dateRange[0].startDate ?? new Date(),
        '.',
      )} ~ ${formatDateWithDayOfWeek(dateRange[0].endDate ?? new Date(), '.')}`
    ) : (
      <span>선택 안 함</span>
    );

  return (
    <>
      <CommonS.Label>
        {children}
        {!required && <CommonS.OptionalText>(선택)</CommonS.OptionalText>}
      </CommonS.Label>
      <S.DateDisplay type="button" onClick={() => setViewCalendar(true)}>
        {dateDisplayText}
      </S.DateDisplay>

      {viewCalendar && (
        <S.DateInputWrapper>
          <Controller
            control={control}
            name={name}
            rules={{ required }}
            render={({ field: { value } }) => (
              <DateRangePicker
                ranges={value || dateRange}
                months={1}
                locale={locales.ko}
                onChange={(item) => {
                  setDateRange([item.selection]);
                  setDisabled(false);
                }}
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                showPreview={false}
                rangeColors={['#1F7158']}
              />
            )}
          />
          <S.ButtonWrapper>
            <Button.Cancel onClick={() => cancel()}>취소하기</Button.Cancel>
            <Button.MD onClick={() => submit()} disabled={disabled}>
              선택하기
            </Button.MD>
          </S.ButtonWrapper>
        </S.DateInputWrapper>
      )}
    </>
  );
}

export default DateRangeInput;

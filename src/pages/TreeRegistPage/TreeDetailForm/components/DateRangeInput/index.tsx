/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import * as locales from 'date-fns/locale';
import Button from 'components/common/button';
import IInputProps from 'types/InputProps';
import * as S from './style';

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

// 외부에서 onChange라는 prop을 받아서 콜백으로 처리할 수 있도록 하자. UI 구현은 render props 패턴으로. 달력의 선택 값을 넘겨줄 수 있도록 하면 될 것 같다.
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

  return (
    <>
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
            <Button.Medium onClick={() => submit()} disabled={disabled}>
              선택하기
            </Button.Medium>
          </S.ButtonWrapper>
        </S.DateInputWrapper>
      )}
    </>
  );
}

export default DateRangeInput;

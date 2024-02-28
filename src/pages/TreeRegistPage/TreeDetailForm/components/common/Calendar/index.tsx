import React, { useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import * as locales from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

type CalendarProps = {
  ranges?: [Range];
  children?: (range: [Range]) => React.ReactNode;
} & Exclude<React.ComponentProps<typeof DateRange>, 'ranges'>;

function Calendar({ onChange = () => {}, children, ranges = [{}], ...rest }: CalendarProps) {
  const [range, setRange] = useState<[Range]>([
    {
      startDate: undefined,
      endDate: undefined,
    },
  ]);

  return (
    <>
      <DateRange
        ranges={ranges.length ? ranges : range}
        showDateDisplay={false}
        showMonthAndYearPickers={false}
        editableDateInputs
        locale={locales.ko}
        onChange={(item) => {
          setRange(ranges && ranges[0].key ? [{ ...item, key: ranges[0].key }] : [item]);
          onChange(item);
        }}
        rangeColors={['#1F7158']}
        {...rest}
      />
      {children && children(range)}
    </>
  );
}

export default Calendar;

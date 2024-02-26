type DayOfWeek = '일' | '월' | '화' | '수' | '목' | '금' | '토';

type getDatOfWeek = {
  (day: ReturnType<Date['getDay']>): DayOfWeek;
  (date: Date): DayOfWeek;
};

const getDayOfWeek: getDatOfWeek = (day: Date | ReturnType<Date['getDay']>) => {
  const dayOfWeek: DayOfWeek[] = ['일', '월', '화', '수', '목', '금', '토'];

  if (day instanceof Date) {
    return dayOfWeek[day.getDay()];
  }

  return dayOfWeek[day];
};

export default getDayOfWeek;

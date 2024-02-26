const getDayOfWeek = (day: ReturnType<Date['getDay']>) => {
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  return dayOfWeek[day];
};

export default getDayOfWeek;

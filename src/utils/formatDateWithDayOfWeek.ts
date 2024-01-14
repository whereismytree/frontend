function formatDateWithDayOfWeek(date: Date, separator: '.' | '-') {
  const addZero = (number: number) => `0${number}`;
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? addZero(date.getMonth() + 1) : date.getMonth() + 1;
  const dayOfMonth = date.getDate() < 10 ? addZero(date.getDate()) : date.getDate();
  const day = date.getDay();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return `${year}${separator}${month}${separator}${dayOfMonth}(${dayOfWeek[day]})`;
}

export default formatDateWithDayOfWeek;

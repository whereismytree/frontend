function formatDateWithDayOfWeek(date: Date, separator: '.' | '-') {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dayOfMonth = date.getDate();
  const day = date.getDay();
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  return `${year}${separator}${month}${separator}${dayOfMonth}(${dayOfWeek[day]})`;
}

export default formatDateWithDayOfWeek;

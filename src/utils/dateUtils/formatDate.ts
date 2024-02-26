/**
 * @param date Date 생성자로 생성된 객체를 받습니다.
 * @param separator 날짜 문자열의 구분자, 온점 혹은 dash(-)를 받습니다.
 * @returns '2023-01-23' 형식의 문자열이 반환됩니다.
 */
const formatDate = (date: Date, separator: '.' | '-') => {
  const addZero = (number: number) => `0${number}`;
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? addZero(date.getMonth() + 1) : date.getMonth() + 1;
  const dayOfMonth = date.getDate() < 10 ? addZero(date.getDate()) : date.getDate();

  return `${year}${separator}${month}${separator}${dayOfMonth}`;
};

export default formatDate;

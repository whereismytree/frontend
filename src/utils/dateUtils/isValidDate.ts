const isValidDate = (date: Date) => {
  return date.toString() !== 'Invalid Date' && !Number.isNaN(date.getTime());
};

export default isValidDate;

const toCamelCase = (...strings: string[]) => {
  return strings
    .map((str, idx) =>
      idx !== 0 ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str.toLowerCase(),
    )
    .join('');
};

export default toCamelCase;

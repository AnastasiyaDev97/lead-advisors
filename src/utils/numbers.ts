export const twoDigitNumberConverter = (number: number): string => {
  if (String(number).length < 2) {
    return `0${number}`;
  }

  return `${number}`;
};

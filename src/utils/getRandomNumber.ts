type Digits = 1 | 2 | 3;

export function getRandomNumber(
  digits: Digits = 1,
  maxNumber?: number
): number {
  const min = digits === 1 ? 1 : Math.pow(10, digits - 1);
  const max = maxNumber ?? Math.pow(10, digits) - 1;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

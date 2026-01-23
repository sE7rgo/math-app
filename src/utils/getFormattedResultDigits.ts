import { Operation } from '../components/Function/Function';

export const getDigits = (num: number, difficulty: number): number[] => {
  return num.toString().padStart(difficulty, '0').split('').map(Number);
};

export const getFormattedResultDigits = (
  result: number,
  difficulty: number,
  operation: Operation
): number[] => {
  let digits: number[];

  if (operation === Operation.Division) {
    digits = Math.floor(result).toString().split('').map(Number);
  } else {
    digits = Math.abs(result).toString().split('').map(Number);
  }

  const expectedLength =
    operation === Operation.Multiplication ? difficulty * 2 : difficulty + 1;
  while (digits.length < expectedLength) {
    digits.unshift(0);
  }

  return digits;
};

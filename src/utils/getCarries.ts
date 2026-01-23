import { Operation } from '../components/Function/Function';
import { getDigits } from './getFormattedResultDigits';

export const getCarries = (
  num1: number,
  num2: number,
  difficulty: number,
  operation: Operation
): number[] => {
  const digits1 = getDigits(num1, difficulty);
  const digits2 = getDigits(num2, difficulty);
  const carries: number[] = Array(difficulty).fill(0);

  if (operation === Operation.Addition) {
    let carry = 0;
    for (let i = difficulty - 1; i >= 0; i--) {
      const sum = digits1[i] + digits2[i] + carry;
      carry = Math.floor(sum / 10);
      if (i > 0) carries[i - 1] = carry;
    }
  } else if (operation === Operation.Subtraction) {
    let borrow = 0;
    for (let i = difficulty - 1; i >= 0; i--) {
      const diff = digits1[i] - borrow - digits2[i];
      if (diff < 0) {
        borrow = 1;
        if (i > 0) carries[i - 1] = 1;
      } else {
        borrow = 0;
      }
    }
  } else if (operation === Operation.Multiplication) {
    let carry = 0;
    for (let i = difficulty - 1; i >= 0; i--) {
      const product = digits1[i] * digits2[difficulty - 1] + carry;
      carry = Math.floor(product / 10);
      if (i > 0) carries[i - 1] = carry;
    }
  }

  return carries;
};

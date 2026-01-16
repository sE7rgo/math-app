import type { Operation, Difficulty, Question } from '../types';

const getDifficultyRange = (difficulty: Difficulty): { min: number; max: number } => {
  switch (difficulty) {
    case 'easy':
      return { min: 1, max: 10 };
    case 'medium':
      return { min: 10, max: 50 };
    case 'hard':
      return { min: 50, max: 100 };
  }
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperation = (): Operation => {
  const operations: Operation[] = ['addition', 'subtraction', 'multiplication', 'division'];
  return operations[Math.floor(Math.random() * operations.length)];
};

export const generateQuestion = (difficulty: Difficulty, operation: Operation): Question => {
  const { min, max } = getDifficultyRange(difficulty);
  const actualOperation = operation === 'mixed' ? getRandomOperation() : operation;
  
  let num1 = getRandomNumber(min, max);
  let num2 = getRandomNumber(min, max);
  let answer: number;

  switch (actualOperation) {
    case 'addition':
      answer = num1 + num2;
      break;
    case 'subtraction':
      // Ensure result is positive
      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }
      answer = num1 - num2;
      break;
    case 'multiplication':
      // For easier multiplication, reduce the range for one number
      num2 = getRandomNumber(1, difficulty === 'easy' ? 10 : difficulty === 'medium' ? 12 : 15);
      answer = num1 * num2;
      break;
    case 'division':
      // Ensure clean division
      num2 = getRandomNumber(1, difficulty === 'easy' ? 10 : difficulty === 'medium' ? 12 : 15);
      answer = getRandomNumber(1, max);
      num1 = num2 * answer; // This ensures clean division
      break;
    default:
      answer = num1 + num2;
  }

  return { num1, num2, operation: actualOperation, answer };
};

export const getOperationSymbol = (operation: Operation): string => {
  switch (operation) {
    case 'addition':
      return '+';
    case 'subtraction':
      return '-';
    case 'multiplication':
      return '×';
    case 'division':
      return '÷';
    default:
      return '+';
  }
};

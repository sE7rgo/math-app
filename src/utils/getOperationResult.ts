import { Operation } from '../components/Function/Function';

export const getOperationLabel = (operation: Operation): string => {
  const labels = {
    [Operation.Addition]: 'Addition with Carry',
    [Operation.Subtraction]: 'Subtraction with Borrow',
    [Operation.Multiplication]: 'Multiplication with Carry',
    [Operation.Division]: 'Division',
  };
  return labels[operation] || 'Math Problem';
};

export const getOperationResult = (
  num1: number,
  num2: number,
  operation: Operation
): number => {
  const operations = {
    [Operation.Addition]: () => num1 + num2,
    [Operation.Subtraction]: () => num1 - num2,
    [Operation.Multiplication]: () => num1 * num2,
    [Operation.Division]: () => num1 / num2,
  };
  return operations[operation]?.() || 0;
};

export const getResultLength = (
  difficulty: number,
  operation: Operation
): number => {
  return operation === Operation.Multiplication
    ? difficulty * 2
    : difficulty + 1;
};

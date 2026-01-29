import { Operation } from '../components/Function/Function';

export const getOperationLabel = (operation: Operation): string => {
  const labels = {
    [Operation.Addition]: 'Addition',
    [Operation.Subtraction]: 'Subtraction',
    [Operation.Multiplication]: 'Multiplication',
    [Operation.Division]: 'Division',
  };
  return labels[operation];
};

export const getOperationResult = (
  num1: number,
  num2: number,
  operation: Operation
) => {
  switch (operation) {
    case Operation.Addition:
      return num1 + num2;
    case Operation.Subtraction:
      return num1 - num2;
    case Operation.Multiplication:
      return num1 * num2;
    case Operation.Division:
      return num1 / num2;
    default:
      return 0;
  }
};

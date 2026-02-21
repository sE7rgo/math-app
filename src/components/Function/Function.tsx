import { Typography, Box, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { getOperationResult, getRandomNumber } from '../../utils';
import * as styles from './Function.styles';

export enum Operation {
  Addition = '+',
  Subtraction = '-',
  Multiplication = 'x',
  Division = '/',
}

interface FunctionProps {
  onCorrect?: () => void;
  onIncorrect?: () => void;
  /* Difficulty level of the math problem. Ex 1 -> 1 digit, 2 -> 2 digits, 3 -> 3 digits */
  difficulty?: 1 | 2 | 3;
  /* Type of math operation to perform */
  operation?: Operation;
}

const Function: FC<FunctionProps> = ({
  onCorrect,
  onIncorrect,
  difficulty = 1,
  operation = Operation.Addition,
}) => {
  const [firstVariable, setFirstVariable] = useState<number>(
    getRandomNumber(difficulty)
  );
  const [secondVariable, setSecondVariable] = useState<number>();
  const [actualResult, setActualResult] = useState<number>();
  const [userResult, setUserResult] = useState<number>();

  /* Setting second variable. Case if subtraction or division, so first number is greater */
  useEffect(() => {
    const organizeNumbers =
      operation === Operation.Subtraction || operation === Operation.Division;
    setSecondVariable(
      organizeNumbers
        ? getRandomNumber(difficulty, firstVariable)
        : getRandomNumber(difficulty)
    );
  }, [firstVariable]);

  useEffect(() => {
    if (!secondVariable) return;
    const result = getOperationResult(firstVariable, secondVariable, operation);
    setActualResult(result);
  }, [secondVariable]);

  const resetNumbers = () => {
    setFirstVariable(getRandomNumber(difficulty));
    setUserResult(undefined);
  };

  const handleSubmit = () => {
    if (userResult === actualResult) {
      onCorrect?.();
    } else {
      onIncorrect?.();
    }

    /* Generate new numbers for next equation */
    resetNumbers();
  };

  const handleResultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserResult(Number(event.target.value));
  };

  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h2" component="div" fontWeight="bold">
        {firstVariable} {operation} {secondVariable} =
      </Typography>
      <TextField
        id="outlined-size-small"
        sx={
          userResult === undefined
            ? styles.textField
            : userResult === actualResult
              ? styles.correctResultTextField
              : styles.wrongResultTextField
        }
        defaultValue=""
        size="small"
        type="number"
        value={userResult === undefined ? '' : userResult}
        onChange={handleResultChange}
      />
      <Button variant="text" onClick={handleSubmit}>
        Check
      </Button>
    </Box>
  );
};

export default Function;

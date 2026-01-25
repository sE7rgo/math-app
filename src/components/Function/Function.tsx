import { Typography, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import type { FC } from 'react';
import { generateNumber } from '../../utils';
import * as styles from './Function.styles';

export enum Operation {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
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
    generateNumber(difficulty)
  );
  const [secondVariable, setSecondVariable] = useState<number>(
    generateNumber(difficulty)
  );
  const [userResult, setUserResult] = useState<number | ''>('');

  const getExpectedResult = () => {
    switch (operation) {
      case Operation.Addition:
        return firstVariable + secondVariable;
      case Operation.Subtraction:
        return firstVariable - secondVariable;
      case Operation.Multiplication:
        return firstVariable * secondVariable;
      case Operation.Division:
        return firstVariable / secondVariable;
      default:
        return 0;
    }
  };

  const handleSubmit = () => {
    if (userResult === getExpectedResult()) {
      onCorrect?.();
    } else {
      onIncorrect?.();
    }

    /* Generate new numbers for next equation */
    if (
      operation === Operation.Subtraction ||
      operation === Operation.Division
    ) {
      const variable = generateNumber(difficulty);
      setFirstVariable(variable);
      setSecondVariable(generateNumber(difficulty, variable));
    } else {
      setFirstVariable(generateNumber(difficulty));
      setSecondVariable(generateNumber(difficulty));
    }
    setUserResult('');
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
        defaultValue=""
        size="small"
        type="text"
        value={userResult}
        onChange={handleResultChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Check
      </Button>
    </Box>
  );
};

export default Function;

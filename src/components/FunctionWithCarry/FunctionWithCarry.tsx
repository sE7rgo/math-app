import { Typography, Box, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Operation } from '../Function/Function';
import * as styles from './FunctionWithCarry.styles';
import {
  getNumberArray,
  getOperationResult,
  getRandomNumber,
} from '../../utils';

interface FunctionWithCarryProps {
  onCorrect?: () => void;
  onIncorrect?: () => void;
  difficulty: 2 | 3;
  operation?: Operation;
}

const FunctionWithCarry: FC<FunctionWithCarryProps> = ({
  onCorrect,
  onIncorrect,
  difficulty,
  operation = Operation.Addition,
}) => {
  const [firstVariable, setFirstVariable] = useState<number>(
    getRandomNumber(difficulty)
  );
  const [secondVariable, setSecondVariable] = useState<number>();
  const [actualResult, setActualResult] = useState<number>();
  const [userInputs, setUserInputs] = useState<number[]>([]);
  // const [carryInputs, setCarryInputs] = useState<(number | '')[]>(
  //   Array(difficulty - 1).fill('')
  // );
  // const resultLength =
  //   operation === Operation.Multiplication ? difficulty * 2 : difficulty + 1;
  // const [resultInputs, setResultInputs] = useState<(number | '')[]>(
  //   Array(resultLength).fill('')
  // );

  /* Setting second variable. Case if subtraction or division, so first number is greater */
  useEffect(() => {
    if (
      operation === Operation.Addition ||
      operation === Operation.Multiplication
    )
      setSecondVariable(getRandomNumber(difficulty));
    else {
      const secondVariable = getRandomNumber(difficulty, firstVariable);
      setSecondVariable(secondVariable);
    }
  }, [firstVariable]);

  /* Setting actual result based on first and second variables */
  useEffect(() => {
    if (!secondVariable) return;
    const result = getOperationResult(firstVariable, secondVariable, operation);
    setActualResult(result);
  }, [secondVariable]);

  useEffect(() => {
    if (!actualResult) return;
    console.log(
      'Expected Result:',
      firstVariable,
      secondVariable,
      actualResult
    );
  }, [actualResult]);
  useEffect(() => {
    console.log('User Inputs:', userInputs);
  }, [userInputs]);
  const handleInputChange = (digit: number, idx: number, value: string) => {
    setUserInputs(prev => {
      const newInputs = [...prev];
      newInputs[idx] = Number(value);
      return newInputs;
    });
    console.log('Input Changed:', digit, idx, value);
  };

  const handleSubmit = () => {
    const userResult = Number(userInputs.join(''));
    if (userResult === actualResult) {
      onCorrect?.();
      console.log('Correct Answer:', userResult);
    } else {
      onIncorrect?.();
      console.log('Incorrect Answer:', userResult);
    }
  };

  const firstVarriableArray = getNumberArray(firstVariable);
  const secondVariableArray = getNumberArray(secondVariable);
  const actualResultArray = getNumberArray(actualResult);

  return (
    <Box sx={styles.containerBox}>
      <Box sx={styles.numberRowBox}>
        <Box sx={styles.spacerBox} />
        {firstVarriableArray.map((digit, key) => (
          <Box key={`num1-${key}`} sx={styles.digitBox}>
            {digit}
          </Box>
        ))}
      </Box>

      <Box sx={styles.numberRowBox}>
        <Typography variant="h5" sx={styles.operatorTypography}>
          {operation}
        </Typography>
        {secondVariableArray.map((digit, key) => (
          <Box key={`num2-${key}`} sx={styles.digitBox}>
            {digit}
          </Box>
        ))}
      </Box>

      <Box
        sx={styles.getHorizontalLine(
          operation === Operation.Multiplication ? difficulty * 2 : difficulty
        )}
      />

      <Box sx={styles.numberRowBox}>
        <Box sx={styles.spacerBox} />
        {actualResultArray?.map((digit, idx) => (
          <TextField
            key={`result-${idx}`}
            slotProps={{ htmlInput: { maxLength: 1 } }}
            size="small"
            type="text"
            onChange={event =>
              handleInputChange(digit, idx, event.target.value)
            }
            sx={
              userInputs[idx] === undefined
                ? styles.resultTextField
                : userInputs[idx] === digit
                  ? styles.correctResultTextField
                  : styles.wrongResultTextField
            }
          />
        ))}
      </Box>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={styles.submitButton}
      >
        Check
      </Button>
    </Box>
  );
};

export default FunctionWithCarry;

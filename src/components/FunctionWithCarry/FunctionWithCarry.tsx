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
  const [firstVariableArray, setFirstVariableArray] = useState<number[]>([]);
  const [secondVariable, setSecondVariable] = useState<number>();
  const [secondVariableArray, setSecondVariableArray] = useState<number[]>([]);
  const [actualResult, setActualResult] = useState<number>();
  const [actualResultArray, setActualResultArray] = useState<number[]>([]);
  const [userInputs, setUserInputs] = useState<number[]>([]);

  /* Setting second variable. Case if subtraction or division, so first number is greater */
  useEffect(() => {
    const organizeNumbers =
      operation === Operation.Subtraction || operation === Operation.Division;
    setSecondVariable(
      organizeNumbers
        ? getRandomNumber(difficulty, firstVariable)
        : getRandomNumber(difficulty)
    );
    setFirstVariableArray(getNumberArray(firstVariable));
  }, [firstVariable]);

  /* Setting actual result based on first and second variables */
  useEffect(() => {
    if (!secondVariable) return;
    const result = getOperationResult(firstVariable, secondVariable, operation);
    setActualResult(result);
    setSecondVariableArray(getNumberArray(secondVariable));
    setActualResultArray(getNumberArray(result));
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
    resetNumbers();
  };

  const resetNumbers = () => {
    setFirstVariable(getRandomNumber(difficulty));
    setUserInputs([]);
  };

  return (
    <Box sx={styles.containerBox}>
      <Box sx={styles.numberRowBox}>
        <Box sx={styles.spacerBox} />
        {firstVariableArray.map((digit, key) => (
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
            value={userInputs[idx] !== undefined ? userInputs[idx] : ''}
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

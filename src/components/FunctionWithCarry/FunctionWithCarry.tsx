import { Typography, Box, TextField, Button } from '@mui/material';
import { use, useEffect, useState } from 'react';
import type { FC } from 'react';
import { Operation } from '../Function/Function';
import * as styles from './FunctionWithCarry.styles';
import {
  generateNumber,
  getCarries,
  getDigits,
  getFormattedResultDigits,
  getOperationLabel,
  getOperationResult,
  getResultLength,
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
    generateNumber(difficulty)
  );
  const [secondVariable, setSecondVariable] = useState<number>();
  const [actualResult, setActualResult] = useState<number>();
  const [carryInputs, setCarryInputs] = useState<number[]>();
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
      setSecondVariable(generateNumber(difficulty));
    else {
      const secondVariable = generateNumber(difficulty, firstVariable);
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
  const handleInputChange = (result: number, value: string) => {
    console.log('Input Changed:', result, value);
  };

  // const handleSubmit = () => {
  //   const result = getOperationResult(firstVariable, secondVariable, operation);
  //   console.log('Expected Result:', firstVariable, secondVariable, result);
  //   const expectedDigits = getFormattedResultDigits(
  //     result,
  //     difficulty,
  //     operation
  //   );
  //   const expectedCarries = getCarries(
  //     firstVariable,
  //     secondVariable,
  //     difficulty,
  //     operation
  //   );

  //   const isResultCorrect = resultInputs.every(
  //     (val, idx) => val === expectedDigits[idx]
  //   );
  //   const areCarriesCorrect = carryInputs.every((val, idx) =>
  //     expectedCarries[idx] === 0
  //       ? val === '' || val === 0
  //       : val === expectedCarries[idx]
  //   );

  //   (isResultCorrect && areCarriesCorrect ? onCorrect : onIncorrect)?.();

  //   // Reset for next problem
  //   /* Making sure first number is greater if subtraction or division */
  //   const needsOrdering =
  //     operation === Operation.Subtraction || operation === Operation.Division;
  //   const variable = generateNumber(difficulty);
  //   const secondVariable = generateNumber(
  //     difficulty,
  //     variable ?? (needsOrdering && variable ? variable : undefined)
  //   );
  //   const ressettedNumbersResult = getOperationResult(
  //     variable,
  //     secondVariable,
  //     operation
  //   );
  //   setFirstVariable(variable);
  //   await setSecondVariable(secondVariable);
  //   setActualResult(ressettedNumbersResult);
  //   console.log(
  //     'Next Expected Result:',
  //     variable,
  //     secondVariable,
  //     ressettedNumbersResult,
  //     ressettedNumbersResult
  //   );

  //   const newResultLength =
  //     operation === Operation.Multiplication ? difficulty * 2 : difficulty + 1;
  //   setCarryInputs(Array(difficulty).fill(''));
  //   setResultInputs(Array(newResultLength).fill(''));
  // };

  const firstVarriableArray = getDigits(firstVariable);
  const secondVariableArray = getDigits(secondVariable);
  const actualResultArray = getDigits(actualResult);

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
        {actualResultArray?.map((result, idx) => (
          <TextField
            key={`result-${idx}`}
            size="small"
            type="text"
            onChange={event => handleInputChange(result, event.target.value)}
            inputProps={styles.resultInputProps}
            // sx={value =>
            //   value ? styles.correctResultTextField : styles.resultTextField
            // }
          />
        ))}
      </Box>

      <Button
        variant="contained"
        // onClick={handleSubmit}
        sx={styles.submitButton}
      >
        Check
      </Button>
    </Box>
  );
};

export default FunctionWithCarry;

import { Typography, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import type { FC } from 'react';
import { generateNumber } from '../../utils/getRandomNumber';
import { Operation } from '../Function/Function';
import * as styles from './FunctionWithCarry.styles';

interface FunctionWithCarryProps {
  onCorrect?: () => void;
  onIncorrect?: () => void;
  /* Difficulty level: 2 -> 2 digits, 3 -> 3 digits */
  difficulty: 2 | 3;
  /* Type of math operation to perform */
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
  const [secondVariable, setSecondVariable] = useState<number>(
    generateNumber(difficulty)
  );
  const [carryInputs, setCarryInputs] = useState<(number | '')[]>(
    Array(difficulty).fill('')
  );
  const [resultInputs, setResultInputs] = useState<(number | '')[]>(
    Array(difficulty + 1).fill('')
  );

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

  const calculateCorrectCarries = () => {
    const digits1 = firstVariable
      .toString()
      .padStart(difficulty, '0')
      .split('')
      .map(Number);
    const digits2 = secondVariable
      .toString()
      .padStart(difficulty, '0')
      .split('')
      .map(Number);
    const carries: number[] = Array(difficulty).fill(0);

    let carry = 0;
    for (let i = difficulty - 1; i >= 0; i--) {
      const sum = digits1[i] + digits2[i] + carry;
      carry = Math.floor(sum / 10);
      if (i > 0) {
        carries[i - 1] = carry;
      }
    }

    return carries;
  };

  const getDigits = (num: number): number[] => {
    return num.toString().padStart(difficulty, '0').split('').map(Number);
  };

  const handleCarryChange = (index: number, value: string) => {
    const newCarries = [...carryInputs];
    newCarries[index] = value === '' ? '' : Number(value);
    setCarryInputs(newCarries);
  };

  const handleResultChange = (index: number, value: string) => {
    const newResults = [...resultInputs];
    newResults[index] = value === '' ? '' : Number(value);
    setResultInputs(newResults);
  };

  const handleSubmit = () => {
    const sum = getExpectedResult();
    const sumDigits = sum.toString().split('').map(Number);

    // Pad with leading zero if needed
    while (sumDigits.length < difficulty + 1) {
      sumDigits.unshift(0);
    }

    const correctCarries = calculateCorrectCarries();

    // Check if result is correct
    const resultCorrect = resultInputs.every(
      (val, idx) => val === sumDigits[idx]
    );

    // Check if carries are correct
    const carriesCorrect = carryInputs.every((val, idx) => {
      if (correctCarries[idx] === 0) {
        return val === '' || val === 0;
      }
      return val === correctCarries[idx];
    });

    if (resultCorrect && carriesCorrect) {
      onCorrect?.();
    } else {
      onIncorrect?.();
    }

    // Generate new numbers
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

    setCarryInputs(Array(difficulty).fill(''));
    setResultInputs(Array(difficulty + 1).fill(''));
  };

  const digits1 = getDigits(firstVariable);
  const digits2 = getDigits(secondVariable);

  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h6" gutterBottom>
        Addition with Carry
      </Typography>

      {/* Carry row */}
      <Box sx={styles.carryRowBox}>
        <Box sx={styles.spacerBox} />
        {carryInputs.map((carry, idx) => (
          <TextField
            key={`carry-${idx}`}
            size="small"
            type="number"
            value={carry}
            onChange={e => handleCarryChange(idx, e.target.value)}
            inputProps={styles.carryInputProps}
            sx={styles.carryTextField}
          />
        ))}
        <Box sx={styles.spacerBox} />
      </Box>

      {/* First number */}
      <Box sx={styles.numberRowBox}>
        <Box sx={styles.spacerBox} />
        {digits1.map((digit, idx) => (
          <Box key={`num1-${idx}`} sx={styles.digitBox}>
            {digit}
          </Box>
        ))}
      </Box>

      {/* Plus sign and second number */}
      <Box sx={styles.numberRowBox}>
        <Typography variant="h5" sx={styles.operatorTypography}>
          +
        </Typography>
        {digits2.map((digit, idx) => (
          <Box key={`num2-${idx}`} sx={styles.digitBox}>
            {digit}
          </Box>
        ))}
      </Box>

      {/* Horizontal line */}
      <Box sx={styles.getHorizontalLine(difficulty)} />

      {/* Result row */}
      <Box sx={styles.numberRowBox}>
        <Box sx={styles.spacerBox} />
        {resultInputs.map((result, idx) => (
          <TextField
            key={`result-${idx}`}
            size="small"
            type="number"
            value={result}
            onChange={e => handleResultChange(idx, e.target.value)}
            inputProps={styles.resultInputProps}
            sx={styles.resultTextField}
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

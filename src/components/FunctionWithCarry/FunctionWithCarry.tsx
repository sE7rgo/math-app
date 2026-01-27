import { Typography, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
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
  const [firstVariable, setFirstVariable] = useState(
    generateNumber(difficulty)
  );
  const [secondVariable, setSecondVariable] = useState(
    generateNumber(difficulty)
  );
  const [carryInputs, setCarryInputs] = useState<(number | '')[]>(
    Array(difficulty).fill('')
  );
  const resultLength =
    operation === Operation.Multiplication ? difficulty * 2 : difficulty + 1;
  const [resultInputs, setResultInputs] = useState<(number | '')[]>(
    Array(resultLength).fill('')
  );

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<(number | '')[]>>) =>
    (index: number, value: string) => {
      setter(prev => {
        const updated = [...prev];
        updated[index] = value === '' ? '' : Number(value);
        return updated;
      });
    };

  const handleSubmit = () => {
    const result = getOperationResult(firstVariable, secondVariable, operation);
    const expectedDigits = getFormattedResultDigits(
      result,
      difficulty,
      operation
    );
    const expectedCarries = getCarries(
      firstVariable,
      secondVariable,
      difficulty,
      operation
    );

    const isResultCorrect = resultInputs.every(
      (val, idx) => val === expectedDigits[idx]
    );
    const areCarriesCorrect = carryInputs.every((val, idx) =>
      expectedCarries[idx] === 0
        ? val === '' || val === 0
        : val === expectedCarries[idx]
    );

    (isResultCorrect && areCarriesCorrect ? onCorrect : onIncorrect)?.();

    // Reset for next problem
    const needsOrdering =
      operation === Operation.Subtraction || operation === Operation.Division;
    if (needsOrdering) {
      const variable = generateNumber(difficulty);
      setFirstVariable(variable);
      setSecondVariable(generateNumber(difficulty, variable));
    } else {
      setFirstVariable(generateNumber(difficulty));
      setSecondVariable(generateNumber(difficulty));
    }

    const newResultLength =
      operation === Operation.Multiplication ? difficulty * 2 : difficulty + 1;
    setCarryInputs(Array(difficulty).fill(''));
    setResultInputs(Array(newResultLength).fill(''));
  };

  const digits1 = getDigits(firstVariable, difficulty);
  const digits2 = getDigits(secondVariable, difficulty);

  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h6" gutterBottom>
        {getOperationLabel(operation)}
      </Typography>

      <Box sx={styles.carryRowBox}>
        {carryInputs.map((carry, idx) => (
          <TextField
            key={`carry-${idx}`}
            size="small"
            type="number"
            value={carry}
            onChange={e =>
              handleInputChange(setCarryInputs)(idx, e.target.value)
            }
            inputProps={styles.carryInputProps}
            sx={styles.carryTextField}
          />
        ))}
      </Box>

      <Box sx={styles.numberRowBox}>
        <Box sx={styles.spacerBox} />
        {digits1.map((digit, idx) => (
          <Box key={`num1-${idx}`} sx={styles.digitBox}>
            {digit}
          </Box>
        ))}
      </Box>

      <Box sx={styles.numberRowBox}>
        <Typography variant="h5" sx={styles.operatorTypography}>
          {operation}
        </Typography>
        {digits2.map((digit, idx) => (
          <Box key={`num2-${idx}`} sx={styles.digitBox}>
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
        {resultInputs.map((result, idx) => (
          <TextField
            key={`result-${idx}`}
            size="small"
            type="text"
            value={result}
            onChange={e =>
              handleInputChange(setResultInputs)(idx, e.target.value)
            }
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

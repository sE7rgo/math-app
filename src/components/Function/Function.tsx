import { Typography, Box, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useRandomNumber } from '../../utils/getRandomNumber';

interface Props {
  onCorrect?: () => void;
  onIncorrect?: () => void;
  /* Difficulty level of the math problem. Ex 1 -> 1 digit, 2 -> 2 digits, 3 -> 3 digits */
  difficulty?: 1 | 2 | 3;
}

const Function: FC<Props> = ({ onCorrect, onIncorrect, difficulty = 1 }) => {
  const firstVariable = useRandomNumber(difficulty);
  const secondVariable = useRandomNumber(difficulty);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    firstVariable.generateNumber();
    secondVariable.generateNumber();
  }, []);

  const handleSubmit = () => {
    if (firstVariable.number + secondVariable.number === result) {
      onCorrect?.();
    } else {
      onIncorrect?.();
    }
    // Generate new numbers for next equation
    firstVariable.generateNumber();
    secondVariable.generateNumber();
    setResult(null);
  };

  const handleResultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResult(Number(event.target.value));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <Typography variant="h2" component="div" fontWeight="bold">
        {firstVariable.number} + {secondVariable.number} =
      </Typography>
      <TextField
        id="outlined-size-small"
        defaultValue=""
        size="small"
        type="number"
        value={result ?? ''}
        onChange={handleResultChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Check
      </Button>
    </Box>
  );
};

export default Function;

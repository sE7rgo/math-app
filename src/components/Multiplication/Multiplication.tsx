import { Box, TextField, Typography } from '@mui/material';
import type { FC } from 'react';
import * as styles from './Multiplication.styles';
import { getNumberArray } from '../../utils';

const Multiplication: FC = () => {
  const firstVariable = 456;
  const secondVariable = 123;

  const secondVariableDigits = String(secondVariable)
    .split('')
    .map(Number)
    .reverse();

  const multiplicationRows = secondVariableDigits.map(digit =>
    getNumberArray(firstVariable * digit)
  );
  const handleInputChange = (digit: number, idx: number, value: string) => {
    console.log('Input Changed:', digit, idx, value);
  };
  console.log('Multiplication Rows:', multiplicationRows);
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="h5">
        {firstVariable} × {secondVariable}
      </Typography>

      <Box sx={styles.numberColumnBox}>
        {multiplicationRows.map((array, arrayIdx) => (
          <Box sx={styles.numberRowBox} key={`row-${arrayIdx}`}>
            {array.map((digit, digitIdx) => (
              <TextField
                key={`result-${arrayIdx}-${digitIdx}`}
                slotProps={{ htmlInput: { maxLength: 1 } }}
                size="small"
                type="text"
                value={digit}
                // value={userInputs[idx] !== undefined ? userInputs[idx] : ''}
                onChange={event =>
                  handleInputChange(digit, digitIdx, event.target.value)
                }
                // sx={
                //   userInputs[idx] === undefined
                //     ? styles.resultTextField
                //     : userInputs[idx] === digit
                //       ? styles.correctResultTextField
                //       : styles.wrongResultTextField
                // }
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Multiplication;

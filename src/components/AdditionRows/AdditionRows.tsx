import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useState, type FC } from 'react';
import * as styles from './AdditionRows.styles';
import { getNumberArray } from '../../utils';
import { Operation } from '../Function';

type UserInputs = Record<number, Array<number | ''>>;

interface AdditionRowsProps {
  firstVariable: number;
  firstVariableArray: number[];
  secondVariableArray: number[];
}
const AdditionRows: FC<AdditionRowsProps> = ({
  firstVariable,
  firstVariableArray,
  secondVariableArray,
}) => {
  const [userInputs, setUserInputs] = useState<UserInputs>({});

  /* Generating multiplication rows based on digits of second variable */
  const multiplicationRows = secondVariableArray.map((digit, key) => {
    const array = getNumberArray(firstVariable * digit);
    if (key < secondVariableArray.length - 1) {
      for (let i = secondVariableArray.length - 1; i > key; i--) {
        /* Adding -1 as placeholder for empty spaces in multiplication rows */
        array.push(-1);
      }
    }
    return array;
  });

  const handleRowInputChange = (idx: number, value: string, rowIdx: number) => {
    setUserInputs(prev => ({
      ...prev,
      [rowIdx]: {
        ...prev[rowIdx],
        [idx]: value === '' ? '' : Number(value),
      },
    }));
  };

  return (
    <Box sx={styles.numberColumnBox}>
      {multiplicationRows.reverse().map((array, arrayIdx) => (
        <Box sx={styles.numberRowBox} key={`row-${arrayIdx}`}>
          {array.map((digit, digitIdx) => (
            <TextField
              key={`result-${arrayIdx}-${digitIdx}`}
              slotProps={{ htmlInput: { maxLength: 1 } }}
              size="small"
              type="text"
              variant={digit === -1 ? 'filled' : 'outlined'}
              disabled={digit === -1}
              value={
                userInputs[arrayIdx] !== undefined &&
                userInputs[arrayIdx][digitIdx] !== undefined
                  ? userInputs[arrayIdx][digitIdx]
                  : ''
              }
              onChange={event =>
                handleRowInputChange(digitIdx, event.target.value, arrayIdx)
              }
              sx={
                userInputs[arrayIdx] === undefined ||
                userInputs[arrayIdx][digitIdx] === undefined
                  ? styles.resultTextField
                  : userInputs[arrayIdx][digitIdx] === digit
                    ? styles.correctResultTextField
                    : styles.wrongResultTextField
              }
            />
          ))}
        </Box>
      ))}
      <Typography variant="h5" sx={styles.operatorTypography}>
        {Operation.Addition}
      </Typography>
      <Box sx={styles.getHorizontalLine(firstVariableArray.length * 2)} />
    </Box>
  );
};

export default AdditionRows;

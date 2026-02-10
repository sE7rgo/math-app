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

  const multiplicationRows = secondVariableArray.reverse().map((digit, key) => {
    console.log('Digit:', digit, firstVariable, firstVariable * digit);
    const array = getNumberArray(firstVariable * digit);
    if (key > 0) {
      for (let i = 0; i < key; i++) {
        console.log('iiiiiiiii', i, key);
        /* Adding -1 as placeholder for empty spaces in multiplication rows */
        array.push(-1);
      }
    }
    console.log('Array for digit', digit, ':', array);
    return array;
  });
  // const multiplicationRows = [...secondVariableArray]
  // .reverse()
  // .map((digit, rowIdx) => {
  //   const digits = Array.from(String(firstNumber * digit), Number);
  //   return [...digits, ...Array(rowIdx).fill(-1)];
  // });

  const handleRowInputChange = (idx: number, value: string, rowIdx: number) => {
    setUserInputs(prev => ({
      ...prev,
      [rowIdx]: {
        ...prev[rowIdx],
        [idx]: value === '' ? '' : Number(value),
      },
    }));
    console.log('Input Changed:', idx, value, 'in row', rowIdx);
  };
  console.log('Multiplication Rows:', multiplicationRows);

  return (
    <Box sx={styles.containerBox}>
      <Box sx={styles.numberColumnBox}>
        {multiplicationRows.map((array, arrayIdx) => (
          <Box sx={styles.numberRowBox} key={`row-${arrayIdx}`}>
            {array.map((digit, digitIdx) => (
              <TextField
                key={`result-${arrayIdx}-${digitIdx}`}
                slotProps={{ htmlInput: { maxLength: 1 } }}
                size="small"
                type="text"
                disabled={digit === -1}
                // value={
                //   userInputs[arrayIdx] !== undefined &&
                //   userInputs[arrayIdx][digitIdx] !== undefined
                //     ? userInputs[arrayIdx][digitIdx]
                //     : ''
                // }
                value={digit}
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
      </Box>
    </Box>
  );
};

export default AdditionRows;

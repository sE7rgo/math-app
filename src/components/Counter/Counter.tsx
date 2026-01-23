import React from 'react';
import type { FC } from 'react';

import { Box, Typography } from '@mui/material';
import * as styles from './Counter.styles';

export type CounterProps = {
  correct: number;
  incorrect: number;
};

const Counter: FC<CounterProps> = ({ correct, incorrect }) => {
  return (
    <Box sx={styles.containerBox}>
      <Typography variant="body1" sx={styles.correctTypography}>
        Correct: {correct}
      </Typography>
      <Typography variant="body1" sx={styles.incorrectTypography}>
        Incorrect: {incorrect}
      </Typography>
    </Box>
  );
};

export default Counter;

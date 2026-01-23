import React from 'react';
import type { FC } from 'react';

import { Box, Typography } from '@mui/material';

export type CounterProps = {
  correct: number;
  incorrect: number;
};

const Counter: FC<CounterProps> = ({ correct, incorrect }) => {
  return (
    <Box display="flex" gap={2}>
      <Typography variant="body1" sx={{ color: 'success.main' }}>
        Correct: {correct}
      </Typography>
      <Typography variant="body1" sx={{ color: 'error.main' }}>
        Incorrect: {incorrect}
      </Typography>
    </Box>
  );
};

export default Counter;

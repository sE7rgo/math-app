import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import type { FC } from 'react';
import { Operation } from '../Function';

type Difficulty = 1 | 2 | 3;
type CounterTime = 30 | 60 | 90;

export interface QuestionsFormValues {
  difficulty: Difficulty;
  counterTime: CounterTime;
  operation: Operation;
  link: string;
}

interface QuestionsProps {
  setDifficulty: (difficulty: Difficulty) => void;
  setOperation: (operation: Operation) => void;
  setLink: (link: string) => void;
  onSubmit?: () => void;
}

const Questions: FC<QuestionsProps> = ({
  setDifficulty,
  setOperation,
  setLink,
  onSubmit,
}) => {
  const handleSubmit = () => {
    onSubmit?.();
  };

  return (
    <Paper elevation={2} sx={{ p: 3, maxWidth: 480, mx: 'auto' }}>
      <Stack spacing={3}>
        <Typography variant="h6" textAlign="center">
          Lets configure your game before starting!
        </Typography>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Difficulty
          </Typography>
          <Stack direction="row" spacing={1}>
            {[1, 2, 3].map(level => (
              <Button
                key={level}
                // variant={difficulty === level ? 'contained' : 'outlined'}
                onClick={() => setDifficulty(level as Difficulty)}
                fullWidth
              >
                {level}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Counter Time (minutes)
          </Typography>
          <Stack direction="row" spacing={1}>
            {[10, 20, 30].map(time => (
              <Button
                key={time}
                // variant={counterTime === time ? 'contained' : 'outlined'}
                // onClick={() => setCounterTime(time as CounterTime)}
                fullWidth
              >
                {time}
              </Button>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Operation
          </Typography>
          <Stack direction="row" spacing={1}>
            {Object.values(Operation).map(value => (
              <Button
                key={value}
                // variant={operation === value ? 'contained' : 'outlined'}
                onClick={() => setOperation(value)}
                fullWidth
              >
                {value}
              </Button>
            ))}
          </Stack>
        </Box>

        <TextField
          label="Insert Link"
          placeholder="https://example.com"
          type="url"
          //   value={link}
          onChange={event => setLink(event.target.value)}
          fullWidth
        />

        <Button variant="contained" onClick={handleSubmit}>
          Start
        </Button>
      </Stack>
    </Paper>
  );
};

export default Questions;

import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { FC } from 'react';
import { Operation } from '../Function';
import {
  useGameSettings,
  type CounterTime,
  type Difficulty,
} from '../../context/GameSettingsContext';
import * as styles from './Questions.styles';

export interface QuestionsFormValues {
  difficulty: Difficulty;
  counterTime: CounterTime;
  operation: Operation;
  link: string;
}

interface QuestionsProps {
  onSubmit: () => void;
}

const Questions: FC<QuestionsProps> = ({ onSubmit }) => {
  const {
    difficulty,
    initialTime,
    operation,
    link,
    setDifficulty,
    setOperation,
    setLink,
    setInitialTime,
  } = useGameSettings();

  const handleSubmit = () => {
    onSubmit?.();
  };

  return (
    <Stack spacing={4} sx={styles.stackContainer}>
      <Typography variant="h6" textAlign="center">
        Quick pit stop before the fun begins!
      </Typography>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Difficulty
        </Typography>
        <Stack direction="row" spacing={1}>
          {[1, 2, 3].map(level => (
            <Button
              key={level}
              variant={difficulty === level ? 'contained' : 'outlined'}
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
              variant={initialTime === time ? 'contained' : 'outlined'}
              onClick={() => setInitialTime(time as CounterTime)}
              fullWidth
            >
              {time}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box>
        <Stack direction="row" spacing={1}>
          {Object.values(Operation).map(value => (
            <Button
              key={value}
              variant={operation === value ? 'contained' : 'outlined'}
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
        placeholder="https://example.com/some-page/some-video"
        type="url"
        value={link}
        onChange={event => setLink(event.target.value)}
        fullWidth
      />

      <Button variant="contained" onClick={handleSubmit}>
        Start
      </Button>
    </Stack>
  );
};

export default Questions;

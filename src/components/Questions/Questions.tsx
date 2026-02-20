import { Box, Button, Stack, TextField, Typography } from '@mui/material';
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

enum DifficultyLevel {
  Easy = 1,
  Medium = 2,
  Hard = 3,
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
      <Typography fontFamily={'Bungee'} variant="h6" textAlign="center">
        Some parameters before we start:
      </Typography>

      <Box>
        <Stack direction="row" spacing={1}>
          {[
            DifficultyLevel.Easy,
            DifficultyLevel.Medium,
            DifficultyLevel.Hard,
          ].map(level => (
            <Button
              key={level}
              variant={'text'}
              color={difficulty === level ? 'success' : 'primary'}
              onClick={() => setDifficulty(level as Difficulty)}
              fullWidth
              sx={styles.questionButton}
            >
              {DifficultyLevel[level]}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box>
        <Stack direction="row" spacing={1}>
          {[10, 20, 30].map(time => (
            <Button
              key={time}
              variant={'text'}
              color={initialTime === time ? 'success' : 'primary'}
              onClick={() => setInitialTime(time as CounterTime)}
              fullWidth
              sx={styles.questionButton}
            >
              {time + ' minutes'}
            </Button>
          ))}
        </Stack>
      </Box>

      <Box>
        <Stack direction="row" spacing={1}>
          {Object.values(Operation).map(value => (
            <Button
              key={value}
              variant={'text'}
              color={operation === value ? 'success' : 'primary'}
              onClick={() => setOperation(value)}
              fullWidth
              sx={styles.questionButton}
            >
              {value}
            </Button>
          ))}
        </Stack>
      </Box>

      <TextField
        label="Your link belongs here"
        placeholder="https://example.com/some-page/some-video"
        type="url"
        value={link}
        onChange={event => setLink(event.target.value)}
        fullWidth
        variant="standard"
      />

      <Button
        variant="text"
        size="large"
        color="secondary"
        onClick={handleSubmit}
        sx={styles.questionButton}
      >
        Begin
      </Button>
    </Stack>
  );
};

export default Questions;

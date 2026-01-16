import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from '@mui/material';
import type { GameSettings, Difficulty, Operation } from '../types';

interface SettingsScreenProps {
  onStart: (settings: GameSettings) => void;
}

export default function SettingsScreen({ onStart }: SettingsScreenProps) {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [operation, setOperation] = useState<Operation>('addition');
  const [redirectUrl, setRedirectUrl] = useState('https://www.youtube.com');

  const handleStart = () => {
    onStart({ difficulty, operation, redirectUrl });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Math Timer Challenge
          </Typography>
          <Typography variant="body1" gutterBottom align="center" sx={{ mb: 3 }}>
            Solve math problems to reduce the timer and reach your reward!
          </Typography>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Difficulty</InputLabel>
            <Select
              value={difficulty}
              label="Difficulty"
              onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            >
              <MenuItem value="easy">Easy (1-10)</MenuItem>
              <MenuItem value="medium">Medium (10-50)</MenuItem>
              <MenuItem value="hard">Hard (50-100)</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Operation</InputLabel>
            <Select
              value={operation}
              label="Operation"
              onChange={(e) => setOperation(e.target.value as Operation)}
            >
              <MenuItem value="addition">Addition (+)</MenuItem>
              <MenuItem value="subtraction">Subtraction (-)</MenuItem>
              <MenuItem value="multiplication">Multiplication (×)</MenuItem>
              <MenuItem value="division">Division (÷)</MenuItem>
              <MenuItem value="mixed">Mixed (All Operations)</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Reward URL"
            value={redirectUrl}
            onChange={(e) => setRedirectUrl(e.target.value)}
            placeholder="https://www.youtube.com"
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handleStart}
            disabled={!redirectUrl}
          >
            Start Game
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

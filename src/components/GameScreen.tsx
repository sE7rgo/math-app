import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  LinearProgress,
  Alert,
} from '@mui/material';
import type { GameSettings } from '../types';
import { generateQuestion, getOperationSymbol } from '../utils/mathGenerator';

interface GameScreenProps {
  settings: GameSettings;
  onRestart: () => void;
}

const INITIAL_TIME = 60; // 60 seconds
const TIME_REDUCTION = 5; // 5 seconds per correct answer

export default function GameScreen({ settings, onRestart }: GameScreenProps) {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [question, setQuestion] = useState(() => 
    generateQuestion(settings.difficulty, settings.operation)
  );
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (timeLeft <= 0) {
      // Validate and redirect to the specified URL
      try {
        const url = new URL(settings.redirectUrl);
        // Only allow http and https protocols for security
        if (url.protocol === 'http:' || url.protocol === 'https:') {
          window.location.assign(settings.redirectUrl);
        }
      } catch (error) {
        console.error('Invalid redirect URL:', error);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, settings.redirectUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const answer = parseInt(userAnswer, 10);
    if (isNaN(answer)) return;

    if (answer === question.answer) {
      setFeedback('correct');
      setScore((prev) => prev + 1);
      setTimeLeft((prev) => Math.max(0, prev - TIME_REDUCTION));
      
      // Generate new question after a short delay
      setTimeout(() => {
        setQuestion(generateQuestion(settings.difficulty, settings.operation));
        setUserAnswer('');
        setFeedback(null);
        inputRef.current?.focus();
      }, 500);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        setFeedback(null);
        setUserAnswer('');
        inputRef.current?.focus();
      }, 1000);
    }
  };

  const progress = (timeLeft / INITIAL_TIME) * 100;

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Time Remaining: {timeLeft}s
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 10, 
                borderRadius: 5,
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: timeLeft <= 10 ? 'error.main' : timeLeft <= 30 ? 'warning.main' : 'success.main',
                }
              }} 
            />
          </Box>

          <Typography variant="h6" gutterBottom>
            Score: {score} correct answers
          </Typography>

          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h3" component="div" sx={{ mb: 2 }}>
              {question.num1} {getOperationSymbol(question.operation)} {question.num2} = ?
            </Typography>
          </Box>

          {feedback && (
            <Alert severity={feedback === 'correct' ? 'success' : 'error'} sx={{ mb: 2 }}>
              {feedback === 'correct' 
                ? `Correct! -${TIME_REDUCTION} seconds!` 
                : 'Incorrect! Try again.'}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="number"
              label="Your Answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              inputRef={inputRef}
              autoFocus
              sx={{ mb: 2 }}
            />
            <Button
              fullWidth
              variant="contained"
              type="submit"
              size="large"
              disabled={!userAnswer}
            >
              Submit Answer
            </Button>
          </form>

          <Button
            fullWidth
            variant="outlined"
            onClick={onRestart}
            sx={{ mt: 2 }}
          >
            Back to Settings
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}

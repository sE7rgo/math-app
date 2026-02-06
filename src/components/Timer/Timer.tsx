import { Typography, Box } from '@mui/material';
import { useImperativeHandle, useEffect, useState, forwardRef } from 'react';
import * as styles from './Timer.styles';

interface Props {
  onComplete?: () => void;
  initialTime: number; // in seconds, default is 30 minutes
}

export interface TimerHandle {
  decreaseTime: (seconds: number) => void;
}

const Timer = forwardRef<TimerHandle, Props>(
  ({ onComplete, initialTime }, ref) => {
    /* Time left in seconds, default is 30 minutes */
    const [timeLeft, setTimeLeft] = useState<number>(initialTime * 60);

    useImperativeHandle(ref, () => ({
      /*Decreasing time when called externally */
      decreaseTime: (seconds: number) => {
        setTimeLeft(prev => Math.max(prev - seconds, 0));
      },
    }));

    useEffect(() => {
      if (timeLeft <= 0) {
        onComplete?.();
        return;
      }

      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }, [timeLeft, onComplete]);

    const formatTime = (seconds: number): string => {
      /* Format seconds into MM:SS */
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
      <Box sx={styles.containerBox}>
        <Typography variant="h2" component="div" fontWeight="bold">
          {formatTime(timeLeft)}
        </Typography>
      </Box>
    );
  }
);

Timer.displayName = 'Timer';

export default Timer;

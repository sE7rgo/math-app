import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import type { FC } from "react";

interface Props {
  onComplete?: () => void;
}

const Timer: FC<Props> = ({ onComplete }) => {
  const [timeLeft, setTimeLeft] = useState<number>(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) {
      onComplete?.();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onComplete]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
      <Typography variant="h2" component="div" fontWeight="bold">
        {formatTime(timeLeft)}
      </Typography>
    </Box>
  );
};

export default Timer;

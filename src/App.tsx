import { useState, useRef } from 'react';
import { Box } from '@mui/material';

import Timer from './components/Timer';
import Function from './components/Function';
import FunctionWithCarry from './components/FunctionWithCarry';
import Counter from './components/Counter';
import * as styles from './App.styles';
import Questions from './components/Questions';
import {
  GameSettingsProvider,
  useGameSettings,
} from './context/GameSettingsContext';
import { useColorScheme } from '@mui/material/styles';

type TimerHandle = {
  decreaseTime: (seconds: number) => void;
};

function App() {
  return (
    <GameSettingsProvider>
      <AppContent />
    </GameSettingsProvider>
  );
}

function AppContent() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const { difficulty, operation, link, initialTime } = useGameSettings();
  const timerRef = useRef<TimerHandle>(null);

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleStart = () => setStarted(true);

  const handleCorrectResponse = () => {
    /* handling correct response, setting correct count, decreasing time by 15 seconds */
    setCount(count => ({ ...count, correct: count.correct + 1 }));
    timerRef.current?.decreaseTime(15);
  };

  const handleIncorrectResponse = () => {
    /* handling incorrect response, setting incorrect count */
    setCount(count => ({ ...count, incorrect: count.incorrect + 1 }));
  };

  const handleTimerComplete = () => {
    /* handling timer complete, redirecter to whatever link */
    const targetLink = link.trim();
    if (!targetLink) return;
    window.location.href = targetLink;
  };
  return !started ? (
    <Questions onSubmit={() => handleStart()} />
  ) : (
    <Box sx={styles.rootContainer}>
      {difficulty === 1 ? (
        <Function
          difficulty={difficulty}
          operation={operation}
          onCorrect={handleCorrectResponse}
          onIncorrect={handleIncorrectResponse}
        />
      ) : (
        <FunctionWithCarry
          difficulty={difficulty}
          operation={operation}
          onCorrect={handleCorrectResponse}
          onIncorrect={handleIncorrectResponse}
        />
      )}
      <Counter correct={count.correct} incorrect={count.incorrect} />
      <Timer
        ref={timerRef}
        onComplete={handleTimerComplete}
        initialTime={initialTime}
      />
    </Box>
  );
}

export default App;

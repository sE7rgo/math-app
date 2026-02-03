import { useState, useRef } from 'react';
import { Box } from '@mui/material';

import Timer from './components/Timer';
import Function from './components/Function';
import FunctionWithCarry from './components/FunctionWithCarry';
import Counter from './components/Counter';
import { Operation } from './components/Function';
import * as styles from './App.styles';
import Questions from './components/Questions';

type TimerHandle = {
  decreaseTime: (seconds: number) => void;
};

function App() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const [difficulty, setDifficulty] = useState<1 | 2 | 3>(2);
  const [operation, setOperation] = useState<Operation>(Operation.Subtraction);
  const [link, setLink] = useState<string>('');
  const timerRef = useRef<TimerHandle>(null);

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
  return !started ? (
    <Questions
      setDifficulty={setDifficulty}
      setOperation={setOperation}
      setLink={setLink}
      onSubmit={() => handleStart()}
    />
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
      <Timer ref={timerRef} />
    </Box>
  );
}

export default App;

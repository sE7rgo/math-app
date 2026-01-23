import { useState, useRef } from 'react';

import './App.css';
import Timer from './components/Timer';
import Function from './components/Function';
import FunctionWithCarry from './components/FunctionWithCarry';
import Counter from './components/Counter';
import { Operation } from './components/Function';

type TimerHandle = {
  decreaseTime: (seconds: number) => void;
};

function App() {
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const [difficulty, setDifficulty] = useState<1 | 2 | 3>(2);
  const timerRef = useRef<TimerHandle>(null);

  const handleCorrectResponse = () => {
    /* handling correct response, setting correct count, decreasing time by 15 seconds */

    setCount(count => ({ ...count, correct: count.correct + 1 }));
    timerRef.current?.decreaseTime(15);
  };

  const handleIncorrectResponse = () => {
    /* handling incorrect response, setting incorrect count */
    setCount(count => ({ ...count, incorrect: count.incorrect + 1 }));
  };
  return (
    <>
      <div>
        {difficulty === 1 ? (
          <Function
            difficulty={difficulty}
            operation={Operation.Addition}
            onCorrect={handleCorrectResponse}
            onIncorrect={handleIncorrectResponse}
          />
        ) : (
          <FunctionWithCarry
            difficulty={difficulty}
            operation={Operation.Addition}
            onCorrect={handleCorrectResponse}
            onIncorrect={handleIncorrectResponse}
          />
        )}
        <Counter correct={count.correct} incorrect={count.incorrect} />
        <Timer ref={timerRef} />
      </div>
    </>
  );
}

export default App;

import { useState, useRef } from 'react';

import './App.css';
import Timer from './components/Timer';
import Function from './components/Function';
import Counter from './components/Counter';

type TimerHandle = {
  decreaseTime: (seconds: number) => void;
};

function App() {
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  const timerRef = useRef<TimerHandle>(null);

  const handleCorrectResponse = () => {
    setCount(count => ({ ...count, correct: count.correct + 1 }));
    timerRef.current?.decreaseTime(15);
  };

  const handleIncorrectResponse = () => {
    setCount(count => ({ ...count, incorrect: count.incorrect + 1 }));
  };
  return (
    <>
      <div>
        <Function
          difficulty={1}
          onCorrect={handleCorrectResponse}
          onIncorrect={handleIncorrectResponse}
        />
        <Counter correct={count.correct} incorrect={count.incorrect} />
        <Timer ref={timerRef} />
      </div>
    </>
  );
}

export default App;

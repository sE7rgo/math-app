import { useState } from 'react';

import './App.css';
import Timer from './components/Timer';
import Function from './components/Function';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });

  const handleCorrectResponse = () => {
    setCount(count => ({ ...count, correct: count.correct + 1 }));
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
        <Timer />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;

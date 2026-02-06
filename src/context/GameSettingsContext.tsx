import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { Operation } from '../components/Function';

export type Difficulty = 1 | 2 | 3;
export type CounterTime = 10 | 20 | 30;

interface GameSettingsContextValue {
  difficulty: Difficulty;
  setDifficulty: Dispatch<SetStateAction<Difficulty>>;
  operation: Operation;
  setOperation: Dispatch<SetStateAction<Operation>>;
  link: string;
  setLink: Dispatch<SetStateAction<string>>;
  initialTime: CounterTime;
  setInitialTime: Dispatch<SetStateAction<CounterTime>>;
}

const GameSettingsContext = createContext<GameSettingsContextValue | undefined>(
  undefined
);

export const GameSettingsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>(2);
  const [operation, setOperation] = useState<Operation>(Operation.Subtraction);
  const [link, setLink] = useState('');
  const [initialTime, setInitialTime] = useState<CounterTime>(30);

  return (
    <GameSettingsContext.Provider
      value={{
        difficulty,
        setDifficulty,
        operation,
        setOperation,
        link,
        setLink,
        initialTime,
        setInitialTime,
      }}
    >
      {children}
    </GameSettingsContext.Provider>
  );
};

export const useGameSettings = (): GameSettingsContextValue => {
  const context = useContext(GameSettingsContext);
  if (!context) {
    throw new Error('useGameSettings must be used within GameSettingsProvider');
  }

  return context;
};

import { useState, useCallback } from 'react';

type Digits = 1 | 2 | 3;

export const useRandomNumber = (digits: Digits = 1) => {
  const [number, setNumber] = useState<number>(0);

  const generateNumber = useCallback(() => {
    const min = digits === 1 ? 1 : Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(randomNum);
    return randomNum;
  }, [digits]);

  return { number, generateNumber };
};

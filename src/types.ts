export type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division' | 'mixed';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  num1: number;
  num2: number;
  operation: Operation;
  answer: number;
}

export interface GameSettings {
  difficulty: Difficulty;
  operation: Operation;
  redirectUrl: string;
}

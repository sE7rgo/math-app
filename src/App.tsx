import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import SettingsScreen from './components/SettingsScreen';
import GameScreen from './components/GameScreen';
import type { GameSettings } from './types';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);

  const handleStart = (settings: GameSettings) => {
    setGameSettings(settings);
  };

  const handleRestart = () => {
    setGameSettings(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {gameSettings ? (
        <GameScreen settings={gameSettings} onRestart={handleRestart} />
      ) : (
        <SettingsScreen onStart={handleStart} />
      )}
    </ThemeProvider>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme/theme';
import { GameSettingsProvider } from './context/GameSettingsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="light">
      <GameSettingsProvider>
        <App />
      </GameSettingsProvider>
    </ThemeProvider>
  </StrictMode>
);

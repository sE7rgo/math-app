import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme/theme';
import { GameSettingsProvider } from './context/GameSettingsContext.tsx';
import { globalStyles } from './styles/globalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="light">
      <GlobalStyles styles={globalStyles} />
      <GameSettingsProvider>
        <App />
      </GameSettingsProvider>
    </ThemeProvider>
  </StrictMode>
);

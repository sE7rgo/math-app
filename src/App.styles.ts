import type { SxProps, Theme } from '@mui/material';

export const appLayout: SxProps<Theme> = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
};

export const pageContent: SxProps<Theme> = {
  flex: 1,
  paddingTop: '64px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export const rootContainer: SxProps<Theme> = {
  margin: '0 auto',
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
};

export const counterBox: SxProps<Theme> = {};

export const timerBox: SxProps<Theme> = {
  position: 'absolute',
  right: 16,
  top: 8,
};

export const equationBox: SxProps<Theme> = {
  flex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const logo: SxProps<Theme> = {
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',
  '&:hover': {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },
  '&.react:hover': {
    filter: 'drop-shadow(0 0 2em #61dafbaa)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    '&:nth-of-type(2)': {
      animation: 'logo-spin infinite 20s linear',
    },
  },
  '@keyframes logo-spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
};

export const card: SxProps<Theme> = {
  padding: '2em',
};

export const readTheDocs: SxProps<Theme> = {
  color: '#888',
};

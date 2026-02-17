import type { SxProps, Theme } from '@mui/material';

export const rootContainer: SxProps<Theme> = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
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

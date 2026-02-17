import type { GlobalStylesProps } from '@mui/material';

export const globalStyles: GlobalStylesProps['styles'] = {
  ':root': {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,
    colorScheme: 'light dark',
    color: 'var(--mui-palette-text-primary)',
    backgroundColor: 'var(--mui-palette-background-default)',
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  a: {
    fontWeight: 500,
    color: '#646cff',
    textDecoration: 'inherit',
  },
  'a:hover': {
    color: '#535bf2',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  h1: {
    fontSize: '3.2em',
    lineHeight: 1.1,
  },
  button: {
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
    cursor: 'pointer',
    transition: 'border-color 0.25s',
  },
  'button:hover': {
    borderColor: '#646cff',
  },
  'button:focus, button:focus-visible': {
    outline: '4px auto -webkit-focus-ring-color',
  },
  '@media (prefers-color-scheme: light)': {
    ':root': {
      color: '#213547',
      backgroundColor: '#ffffff',
    },
    'a:hover': {
      color: '#747bff',
    },
    button: {
      backgroundColor: '#f9f9f9',
    },
  },
};

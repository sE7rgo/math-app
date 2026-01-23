import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
};

export const typography: SxProps<Theme> = {
  variant: 'h2',
  component: 'div',
  fontWeight: 'bold',
};

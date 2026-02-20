import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
};

export const textField: SxProps<Theme> = {
  marginLeft: 2,
  marginRight: 2,
  width: '5em',
};

export const typography: SxProps<Theme> = {
  variant: 'h2',
  component: 'div',
  fontWeight: 'bold',
};

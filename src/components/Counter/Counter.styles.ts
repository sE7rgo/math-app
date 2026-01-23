import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
};

export const correctTypography: SxProps<Theme> = {
  color: 'success.main',
};

export const incorrectTypography: SxProps<Theme> = {
  color: 'error.main',
};

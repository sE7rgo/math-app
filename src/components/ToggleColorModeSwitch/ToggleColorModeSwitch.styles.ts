import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  bgcolor: 'background.default',
  color: 'text.primary',
  borderRadius: 1,
  p: 3,
  minHeight: '56px',
};

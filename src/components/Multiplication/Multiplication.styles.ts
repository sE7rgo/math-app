import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
  padding: 2,
};

export const boardBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  border: theme => `1px solid ${theme.palette.divider}`,
  padding: 1,
  gap: 0.5,
};

export const numberRowBox: SxProps<Theme> = {
  display: 'flex',
  gap: 0.5,
  alignItems: 'center',
  justifyContent: 'flex-end',
};

export const numberColumnBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: 0.5,
};

export const signBox: SxProps<Theme> = {
  width: '24px',
};

export const signTypography: SxProps<Theme> = {
  width: '24px',
  textAlign: 'center',
  color: 'primary.main',
  fontWeight: 600,
};

export const numberTypography: SxProps<Theme> = {
  minWidth: '180px',
  textAlign: 'right',
  color: 'primary.main',
  fontWeight: 600,
  fontSize: '1.5rem',
};

export const horizontalLine: SxProps<Theme> = {
  borderTop: theme => `2px solid ${theme.palette.divider}`,
  minWidth: '180px',
};

export const getPartialResultTextField = (shift: number): SxProps<Theme> => ({
  width: '180px',
  marginRight: `${shift * 14}px`,
  '& .MuiInputBase-input': {
    textAlign: 'right',
    color: 'primary.main',
    fontWeight: 600,
    paddingY: '8px',
  },
});

export const resultTextField: SxProps<Theme> = {
  width: '180px',
  '& .MuiInputBase-input': {
    textAlign: 'right',
    color: 'primary.main',
    fontWeight: 700,
    paddingY: '8px',
  },
};

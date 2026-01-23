import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
  gap: 1,
};

export const carryRowBox: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
  alignItems: 'center',
  minHeight: '50px',
};

export const spacerBox: SxProps<Theme> = {
  width: '30px',
};

export const carryTextField: SxProps<Theme> = {
  width: '50px',
};

export const carryInputProps = {
  style: { textAlign: 'center' as const, fontSize: '14px', width: '30px' },
  min: 0,
  max: 9,
};

export const numberRowBox: SxProps<Theme> = {
  display: 'flex',
  gap: 1,
  alignItems: 'center',
};

export const digitBox: SxProps<Theme> = {
  width: '50px',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
};

export const operatorTypography: SxProps<Theme> = {
  width: '30px',
  textAlign: 'center',
};

export const getHorizontalLine = (difficulty: number): SxProps<Theme> => ({
  width: `${(difficulty + 1) * 58}px`,
  borderTop: '2px solid black',
  marginY: 0.5,
});

export const resultTextField: SxProps<Theme> = {
  width: '50px',
};

export const resultInputProps = {
  style: { textAlign: 'center' as const, fontSize: '20px', width: '30px' },
  min: 0,
  max: 9,
};

export const submitButton: SxProps<Theme> = {
  marginTop: 2,
};

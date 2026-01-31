import type { SxProps, Theme } from '@mui/material';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '300px',
  gap: 1,
};

export const spacerBox: SxProps<Theme> = {
  width: '30px',
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

export const correctResultTextField: SxProps<Theme> = {
  width: '50px',
  backgroundColor: '#a5d6a7', // Light green background for correct answers
};

export const wrongResultTextField: SxProps<Theme> = {
  width: '50px',
  backgroundColor: '#fd0303', // Light red background for incorrect answers
};

export const submitButton: SxProps<Theme> = {
  marginTop: 2,
};

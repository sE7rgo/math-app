import type { SxProps, Theme } from '@mui/material';
import { colors } from '../../styles';
export const containerBox: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
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
  fontFamily: 'Shadows Into Light,',
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

export const extraRowsContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
};

export const resultTextField: SxProps<Theme> = {
  width: '50px',
  fontFamily: 'Shadows Into Light,',
  fontWeight: 'bold',
};

export const correctResultTextField: SxProps<Theme> = {
  width: '50px',
  backgroundColor: colors.success, // Light green background for correct answers
};

export const wrongResultTextField: SxProps<Theme> = {
  width: '50px',
  backgroundColor: colors.error, // Light red background for incorrect answers
};

export const submitButton: SxProps<Theme> = {
  marginTop: 2,
};

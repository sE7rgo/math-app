import type { SxProps, Theme } from '@mui/material';
import { colors } from '../../styles';

export const containerBox: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
};

export const textField: SxProps<Theme> = {
  marginLeft: 2,
  marginRight: 2,

  fontFamily: 'Shadows Into Light,',
  fontWeight: 'bold',
  '& .MuiInputBase-input': { fontSize: '4rem', width: '1em' }, // typed text
};

export const correctResultTextField: SxProps<Theme> = {
  backgroundColor: colors.success, // Light green background for correct answers
  marginLeft: 2,
  marginRight: 2,

  fontFamily: 'Shadows Into Light,',
  fontWeight: 'bold',
  '& .MuiInputBase-input': { fontSize: '4rem', width: '1em' }, // typed text
};

export const wrongResultTextField: SxProps<Theme> = {
  backgroundColor: colors.error, // Light red background for incorrect answers
  marginLeft: 2,
  marginRight: 2,

  fontFamily: 'Shadows Into Light,',
  fontWeight: 'bold',
  '& .MuiInputBase-input': { fontSize: '4rem', width: '1em' }, // typed text
};

export const typography: SxProps<Theme> = {
  variant: 'h2',
  component: 'div',
  fontWeight: 'bold',
};

import type { SxProps, Theme } from '@mui/material';
import { colors } from '../../styles';

export const footerBox: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 1,
};

export const textTypography: SxProps<Theme> = {
  color: colors.grey4,
};

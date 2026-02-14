import type { SxProps, Theme } from '@mui/material';
import { colors } from '../../styles';

export const appBarBox: SxProps<Theme> = {
  top: 0,
  width: '100%',
  color: colors.grey4,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 1,
  position: 'fixed',
  backgroundColor: colors.warning,
};

export const titleTypography: SxProps<Theme> = {
  fontWeight: 700,
};

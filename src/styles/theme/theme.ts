import { createTheme } from '@mui/material';
import { breakpoints } from './breakpoints';
import { colors } from './colors';

export const defaultPalette = {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
    },
  },
  typography = {
    // fonts need to be loaded from CDN in the HTML head
    body2: {
      // non-uppercase buttons
      fontWeight: 500,
    },
    fontFamily: ['Montserrat', '"Open Sans"', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    htmlFontSize: 16,
  };

export const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});
export default {
  theme,
  palette: defaultPalette,
  breakpoints,
  typography,
};

import { createTheme } from '@mui/material/styles';
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
};

const darkPalette = {
  ...defaultPalette,
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: colors.white,
    secondary: colors.grey2,
  },
};

export const typography = {
  body2: {
    fontWeight: 500,
  },
  fontFamily: [
    '"Shadows Into Light"',
    '"Bungee"',
    '"Open Sans"',
    'Arial',
    'sans-serif',
  ].join(','),
  fontSize: 14,
  htmlFontSize: 16,
};

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: defaultPalette,
    },
    dark: {
      palette: darkPalette,
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints,
  typography: {
    ...typography,
  },
});

export default theme;

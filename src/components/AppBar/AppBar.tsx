import { AppBar as MuiAppBar, Typography } from '@mui/material';
import type { FC } from 'react';
import * as styles from './AppBar.styles';
import ToggleColorModeSwitch from '../ToggleColorModeSwitch';

interface AppBarProps {
  mode: 'light' | 'dark' | 'system' | undefined;
  setMode: (mode: 'light' | 'dark') => void;
  title?: string;
}

const AppBar: FC<AppBarProps> = ({ mode, setMode, title = 'Math App' }) => {
  return (
    <MuiAppBar enableColorOnDark sx={styles.appBarBox}>
      <Typography variant="h6">{title}</Typography>
      <ToggleColorModeSwitch mode={mode} setMode={setMode} />
    </MuiAppBar>
  );
};

export default AppBar;

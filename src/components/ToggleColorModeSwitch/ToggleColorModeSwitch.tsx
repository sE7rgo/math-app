import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { type FC } from 'react';
import * as styles from './ToggleColorModeSwitch.styles';

interface ToggleColorModeSwitchProps {
  mode: 'light' | 'dark' | 'system' | undefined;
  setMode: (mode: 'light' | 'dark') => void;
}

const ToggleColorModeSwitch: FC<ToggleColorModeSwitchProps> = ({
  mode = 'light',
  setMode,
}) => {
  return (
    <Box sx={styles.containerBox}>
      <FormControl>
        <RadioGroup
          row
          value={mode}
          onChange={event => setMode(event.target.value as 'light' | 'dark')}
        >
          <FormControlLabel value="light" control={<Radio />} label="Light" />
          <FormControlLabel value="dark" control={<Radio />} label="Dark" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default ToggleColorModeSwitch;

import { FormControl, FormControlLabel, Switch } from '@mui/material';
import { type FC } from 'react';

interface ToggleColorModeSwitchProps {
  mode: 'light' | 'dark' | 'system' | undefined;
  setMode: (mode: 'light' | 'dark') => void;
}

const ToggleColorModeSwitch: FC<ToggleColorModeSwitchProps> = ({
  mode = 'light',
  setMode,
}) => {
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Switch
            checked={mode === 'dark'}
            onChange={event => setMode(event.target.checked ? 'dark' : 'light')}
          />
        }
        label={mode === 'dark' ? 'Dark' : 'Light'}
      />
    </FormControl>
  );
};

export default ToggleColorModeSwitch;

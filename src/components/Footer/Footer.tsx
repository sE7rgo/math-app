import { Box, Typography } from '@mui/material';
import type { FC } from 'react';
import * as styles from './Footer.styles';

interface FooterProps {
  text?: string;
}

const Footer: FC<FooterProps> = ({ text = 'Created for Sasha! ❤️' }) => {
  return (
    <Box sx={styles.footerBox}>
      <Typography variant="body2" sx={styles.textTypography}>
        {text}
      </Typography>
    </Box>
  );
};

export default Footer;

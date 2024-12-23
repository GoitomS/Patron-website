'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: '#A4DB08',
    },
    secondary: {
      main: '#081334',
    },
  }
});

export default theme;
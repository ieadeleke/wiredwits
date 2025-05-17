// Create a file like theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: "Plus Jakarta Sans", "Inter", sans-serif;
        }
      `,
    },
  },
});

export default theme;
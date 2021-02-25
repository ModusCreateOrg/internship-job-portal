import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    background: {
      default: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    },
  },
  typography: {
    fontFamily: ['"Poppins"', 'Sans-Serif'].join(','),
  },
});

export default theme;

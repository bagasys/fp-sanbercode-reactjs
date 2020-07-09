import { createMuiTheme } from '@material-ui/core/styles';


const color1 = "#6a2c70"
const color2 = "#b83b5e"
const color3 = "#f08a5d"
const color4 = "#eeecda"


export default createMuiTheme({
  palette: {
    primary: {
      main: `${color1}`
    },
    secondary: {
      main: `${color2}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      textTransform: 'none',
      fontWeight: "700",
      fontSize: "1rem",
    },
  }
})
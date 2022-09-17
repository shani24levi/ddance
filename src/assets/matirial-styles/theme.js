import { createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

//Defenition of MUI elemnts styles
const theme = createTheme({
  palette: {
    secondary: {
      main: pink[200],
    },
    textSecondary: {
      color: "#ffffff"
    },
    text: {
      disabled: "#c5e0e361",
    },
  },
  typography: {
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: 16,
      color: "white",
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif",
    },
    h5: {
      fontWeight: 400,
      fontSize: 'medium',
      color: "white"
    }
  },
  overrides: {
    MuiCardContent: {
      root: {
        paddingBottom: '0px !important',
        color: '#fff',
        display: 'flex',
      }
    },
    MuiButton: {
      root: {
        borderRadius: "30px",
        padding: "5px 30px",
        fonrSize: "15px",
      },
      label: {
        color: "white",
        fontSize: "16px",
      }
    },
    MuiAppBar: {
      root: {
        backgroundColor: pink[200],
        color: pink[200],
      },
      colorPrimary: {
        backgroundColor: pink[200],
      },
      colorTransparent: {
        backgroundColor: pink[300],
        color: pink[300]
      }
    },
    MuiIconButton: {
      label: {
        color: "#ffffff",
      },
    },
    MuiDataGrid: {
      root: {
        color: "#ffffff",
      },
    },
  },
});

export default theme;

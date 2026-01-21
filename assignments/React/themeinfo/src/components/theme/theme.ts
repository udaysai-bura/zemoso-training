import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1", 
      light: "#818cf8",
      dark: "#4f46e5",
    },
    secondary: {
      main: "#ec4899", 
      light: "#f472b6",
      dark: "#db2777",
    },
    background: {
      default: "#f8fafc", 
      paper: "#ffffff",
    },
    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h6: {
      fontWeight: 700,
      color: "#1e293b",
    },
    body1: {
      color: "#475569",
    },
    body2: {
      color: "#64748b",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#f8fafc',
          },
        },
      },
    },
  },
});
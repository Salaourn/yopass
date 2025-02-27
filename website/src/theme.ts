import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#F24822",
      light: "#F46E4F",
      dark: "#C93A1B",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#8C8B8B",
      light: "#A7A6A6",
      dark: "#6E6D6D",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#000000",
      paper: "#000000",
    },
    text: {
      primary: "#FFFFFF",
    },
    divider: "rgba(242, 72, 34, 0.3)",
    error: {
      main: "#FF5252",
    },
    warning: {
      main: "#FFB74D",
    },
    info: {
      main: "#64B5F6",
    },
    success: {
      main: "#66BB6A",
    },
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      color: "#FFFFFF",
      fontWeight: 500,
    },
    h2: {
      color: "#FFFFFF",
      fontWeight: 500,
    },
    h3: {
      color: "#FFFFFF",
      fontWeight: 100,
      letterSpacing: "0.07em",
      backgroundImage: "linear-gradient(to right, rgba(242, 72, 34, 0.6), rgba(242, 72, 34, 0.2), transparent)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0 100%",
      backgroundSize: "100% 2px",
      transition: "text-shadow 0.3s ease-in-out",
      "&:hover": {
        textShadow: "0px 0px 20px rgba(255, 255, 255, 0.6)",
      },
    },
    h4: {
      color: "#FFFFFF",
      fontWeight: 500,
    },
    h5: {
      color: "#FFFFFF",
      fontWeight: 500,
    },
    h6: {
      color: "#FFFFFF",
      fontWeight: 500,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: "#F24822",
          },
          "& .PrivateSwitchBase-input": {
            backgroundColor: "transparent",
            border: "1px solid #F24822",
            borderRadius: "1px",
            "&:checked": {
              backgroundColor: "#F24822",
            },
          },
          "&:not(.Mui-checked)": {
            "& .MuiSvgIcon-root": {
              color: "transparent",
            },
            "&::before": {
              content: '""',
              width: "18px",
              height: "18px",
              border: "1px solid #F24822",
              borderRadius: "1px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "&.MuiRadio-root": {
            color: "#F24822",
          },
          "&.Mui-checked": {
            color: "#F24822",
          },
          "& .MuiSvgIcon-root": {
            color: "#F24822",
          },
          "& + .MuiFormControlLabel-label": {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: "none",
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: "#F24822",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#F45837",
          },
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          },
        },
        outlined: {
          borderColor: "#F24822",
          "&:hover": {
            backgroundColor: "rgba(239, 228, 226, 0.08)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#E3E2DE",
          color: "#FFFFFF",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#121110",
          borderRight: "1px solid rgba(242, 72, 34, 0.12)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1D1C",
          borderRadius: 8,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          boxShadow: "40px 40px 40px rgba(0, 0, 0, 15)",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&#pre": {
            color: "#000000",
          },
        },
        caption: {
          paddingTop: "5px",
          paddingBottom: "5px",
          letterSpacing: "0.02em",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          border: "2px solid #F24822", 
          boxShadow: "0px 0px 15px rgba(242, 72, 34, 0.5)",
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(242, 72, 34, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(242, 72, 34, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#F24822",
            },
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: "#F24822",
            "& + .MuiSwitch-track": {
              backgroundColor: "#F24822",
              opacity: 0.5,
            },
          },
        },
        track: {
          opacity: 0.3,
          backgroundColor: "#8C8B8B",
        },
        thumb: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        .fa, 
        .fas,
        .far,
        .fal,
        .fab,
        .svg-inline--fa {
          color: #F24822 !important;
        }
        .MuiButton-root .svg-inline--fa path {
          fill: #FFFFFF !important; /* Make the inside white */
        }
        .MuiButton-textSecondary {
          color: #F24822 !important;
        }
      `,
    },
  },
})

export default theme


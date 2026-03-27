import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#6366F1", // Vibrant indigo
      light: "#818CF8",
      dark: "#4F46E5",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#EC4899", // Pink
      light: "#F472B6",
      dark: "#DB2777",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: "#14B8A6", // Teal
      light: "#2DD4BF",
      dark: "#0D9488",
    },
    accent: {
      orange: "#F97316",
      purple: "#A855F7",
      yellow: "#EAB308",
    },
    background: {
      default: "#F9FAFB",
      paper: "#FFFFFF",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    text: {
      primary: "#1F2937",
      secondary: "#6B7280",
      disabled: "#9CA3AF",
    },
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
    },
    info: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
    },
  },
  typography: {
    fontFamily: '"Inter", "Poppins", "Segoe UI", "Roboto", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0,0,0,0.05)",
    "0px 4px 8px rgba(0,0,0,0.1)",
    "0px 8px 16px rgba(0,0,0,0.1)",
    "0px 12px 24px rgba(0,0,0,0.1)",
    "0px 16px 32px rgba(0,0,0,0.1)",
    "0px 20px 40px rgba(0,0,0,0.1)",
    "0px 24px 48px rgba(0,0,0,0.1)",
    "0px 28px 56px rgba(0,0,0,0.1)",
    "0px 32px 64px rgba(0,0,0,0.1)",
    "0px 36px 72px rgba(0,0,0,0.1)",
    "0px 40px 80px rgba(0,0,0,0.1)",
    "0px 44px 88px rgba(0,0,0,0.1)",
    "0px 48px 96px rgba(0,0,0,0.1)",
    "0px 52px 104px rgba(0,0,0,0.1)",
    "0px 56px 112px rgba(0,0,0,0.1)",
    "0px 60px 120px rgba(0,0,0,0.1)",
    "0px 64px 128px rgba(0,0,0,0.1)",
    "0px 68px 136px rgba(0,0,0,0.1)",
    "0px 72px 144px rgba(0,0,0,0.1)",
    "0px 76px 152px rgba(0,0,0,0.1)",
    "0px 80px 160px rgba(0,0,0,0.1)",
    "0px 84px 168px rgba(0,0,0,0.1)",
    "0px 88px 176px rgba(0,0,0,0.1)",
    "0px 92px 184px rgba(0,0,0,0.1)",
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 24px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            transition: "all 0.3s ease",
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6366F1",
              },
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 20,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;

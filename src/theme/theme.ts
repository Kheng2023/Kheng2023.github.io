import { createTheme, type PaletteMode } from '@mui/material'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}

const sharedTypography = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  h1: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 800,
  },
  h2: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 700,
  },
  h3: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 700,
  },
  h4: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
  },
  h5: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
  },
  h6: {
    fontFamily: '"Plus Jakarta Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: 600,
  },
}

export function getTheme(mode: PaletteMode) {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1e40af' : '#60a5fa',
        dark: mode === 'light' ? '#1e3a5f' : '#3b82f6',
        light: mode === 'light' ? '#3b82f6' : '#93c5fd',
        contrastText: '#ffffff',
      },
      secondary: {
        main: mode === 'light' ? '#f97316' : '#fb923c',
        light: mode === 'light' ? '#fdba74' : '#fed7aa',
        contrastText: '#ffffff',
      },
      background: {
        default: mode === 'light' ? '#f8fafc' : '#0f172a',
        paper: mode === 'light' ? '#ffffff' : '#1e293b',
      },
      text: {
        primary: mode === 'light' ? '#1e293b' : '#f1f5f9',
        secondary: mode === 'light' ? '#64748b' : '#94a3b8',
      },
      divider: mode === 'light' ? '#e2e8f0' : '#334155',
    },
    typography: sharedTypography,
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
        },
      },
    },
  })
}

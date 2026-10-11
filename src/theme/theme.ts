import { createTheme} from '@mui/material'

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

export function getTheme() {
  return createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#1B4332',
          light: '#2D6A4F',
          dark: '#0D281F',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#606C38',
          light: '#7B8654',
          dark: '#4C5A2D',
          contrastText: '#ffffff',
        },
        warning: {
          main: '#D4A373',
          light: '#E7C6A0',
          dark: '#B88A62',
          contrastText: '#1B4332',
        },
        background: {
          default: '#F8F9FA',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
        },
        divider: '#D5DFD8',
        action: {
          hover: 'rgba(27,67,50,0.05)',
        },
      },
    typography: sharedTypography,
    shape: { borderRadius: 12 },
    components: {
      // A visible keyboard focus ring on every button, icon button and link (WCAG 2.4.7).
      // :focus-visible only shows it for keyboard users, not on mouse click.
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&.Mui-focusVisible': { outline: '2px solid #2D6A4F', outlineOffset: 2 },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            '&:focus-visible': { outline: '2px solid #2D6A4F', outlineOffset: 2, borderRadius: 2 },
          },
        },
      },
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

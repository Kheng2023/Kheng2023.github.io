import { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Medical Career', href: '#medical' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 1 : 0}
        sx={{
          bgcolor: scrolled ? 'rgba(248,249,250,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid' : 'none',
          borderColor: 'divider',
          transition: 'all 0.3s ease',
          color: 'text.primary',
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3 },
            minHeight: { xs: 60, md: 64 },
          }}
        >
          {/* Logo / name */}
          <Typography
            variant="h6"
            component="div"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            sx={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 800,
              fontSize: '1.05rem',
              color: 'primary.main',
              cursor: 'pointer',
              flexGrow: 1,
              userSelect: 'none',
            }}
          >
            Yong Kheng
          </Typography>

          {/* Desktop nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 0.25, mr: 0.5 }}>
              {NAV_ITEMS.map(item => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    px: 1.5,
                    '&:hover': { color: 'primary.main', bgcolor: 'transparent' },
                  }}
                  disableRipple
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="small"
              aria-label="Open navigation menu"
              sx={{ color: 'text.primary', ml: 0.5 }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260 } }}
      >
        <Box sx={{ pt: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1.5, py: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Divider />
          <List sx={{ pt: 1 }}>
            {NAV_ITEMS.map(item => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(item.href)}
                  sx={{ py: 1.5, px: 3 }}
                >
                  <Typography fontWeight={500} variant="body2">
                    {item.label}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

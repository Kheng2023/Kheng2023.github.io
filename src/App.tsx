import { useMemo } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import { MotionConfig } from 'framer-motion'
import { getTheme } from './theme/theme'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import DoctorCareer from './components/sections/DoctorCareer'

function App() {
  const theme = useMemo(() => getTheme(), [])

  return (
    <ThemeProvider theme={theme}>
      {/* Honour the OS "reduce motion" setting: skips movement animations, keeps opacity fades */}
      <MotionConfig reducedMotion="user">
        <CssBaseline />
        <NavBar />
        <Box component="main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <DoctorCareer />
        </Box>
        <Footer />
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App

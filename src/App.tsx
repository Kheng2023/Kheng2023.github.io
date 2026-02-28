import { useMemo } from 'react'
import { ThemeProvider, CssBaseline, Box } from '@mui/material'
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
  const theme = useMemo(() => getTheme('dark'), [])

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default App

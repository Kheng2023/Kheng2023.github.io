import { useEffect, useState, lazy, Suspense } from 'react'
import {
  Box,
  Typography,
  Button,
  Avatar,
  Grid,
  Chip,
  Container,
} from '@mui/material'
import { motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import GitHubIcon from '@mui/icons-material/GitHub'

const ThreeBackground = lazy(() => import('../ui/ThreeBackground'))

const getGreeting = () => {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const textItem = (delay: number) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  },
})

const imageVariant = {
  hidden: { opacity: 0, scale: 0.82, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: 0.25, duration: 0.75, ease: 'easeOut' },
  },
}

export default function Hero() {
  const [greeting, setGreeting] = useState(getGreeting())

  useEffect(() => {
    const id = setInterval(() => setGreeting(getGreeting()), 60_000)
    return () => clearInterval(id)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 8 },
        pb: { xs: 6, md: 8 },
        background: theme =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
            : 'linear-gradient(135deg, #dbeafe 0%, #f8fafc 55%, #fff7ed 100%)',
      }}
    >
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* ── Text column ── */}
          <Grid item xs={12} md={7}>
            <motion.div variants={textItem(0)} initial="hidden" animate="visible">
              <Typography
                variant="body2"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 700,
                  mb: 1.5,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  fontSize: '0.78rem',
                }}
              >
                {greeting} 👋
              </Typography>
            </motion.div>

            <motion.div variants={textItem(0.12)} initial="hidden" animate="visible">
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 1.5,
                  letterSpacing: '-0.02em',
                }}
              >
                Yong Kheng Beh
              </Typography>
            </motion.div>

            <motion.div variants={textItem(0.24)} initial="hidden" animate="visible">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.45rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                Software Developer&nbsp;&nbsp;·&nbsp;&nbsp;Doctor
              </Typography>
            </motion.div>

            <motion.div variants={textItem(0.36)} initial="hidden" animate="visible">
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.05rem',
                  color: 'text.secondary',
                  mb: 4,
                  maxWidth: 520,
                  lineHeight: 1.82,
                }}
              >
                A career-changer with{' '}
                <Box component="strong" sx={{ color: 'text.primary' }}>
                  8+ years in medicine
                </Box>{' '}
                and a{' '}
                <Box component="strong" sx={{ color: 'text.primary' }}>
                  Master of Computing & Innovation
                </Box>{' '}
                (GPA&nbsp;6.83/7) from the University of Adelaide. Passionate
                about AI, software development, and building software that makes
                a real difference.
              </Typography>
            </motion.div>

            <motion.div variants={textItem(0.48)} initial="hidden" animate="visible">
              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollTo('experience')}
                  sx={{ px: 3, py: 1.25 }}
                >
                  View Experience
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/Kheng2023"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ px: 3, py: 1.25 }}
                >
                  GitHub
                </Button>

              </Box>
            </motion.div>

            <motion.div variants={textItem(0.58)} initial="hidden" animate="visible">
              <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                {['Python', 'React', 'LangChain', 'Docker', 'Machine Learning'].map(skill => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                    color="primary"
                    sx={{ fontWeight: 500, height: 26, borderRadius: 1.5 }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* ── Photo column ── */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              variants={imageVariant}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              style={{ display: 'inline-block' }}
            >
              {/* Glassmorphism border frame */}
              <Box
                sx={{
                  width: { xs: 220, sm: 260, md: 300 },
                  height: { xs: 220, sm: 260, md: 300 },
                  borderRadius: '28px',
                  p: '4px',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  background:
                    'linear-gradient(135deg, rgba(148,197,253,0.38) 0%, rgba(96,165,250,0.12) 50%, rgba(251,146,60,0.22) 100%)',
                  boxShadow:
                    '0 24px 56px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(148,197,253,0.18), inset 0 1px 0 rgba(255,255,255,0.12)',
                }}
              >
                {/* Image clipped to rounded-rect */}
                <Avatar
                  src="/images/profile-500px.jpg"
                  alt="Yong Kheng Beh"
                  variant="square"
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '24px',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

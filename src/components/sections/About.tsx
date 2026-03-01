import { Grid, Typography, Paper, Box } from '@mui/material'
import { motion } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import CodeIcon from '@mui/icons-material/Code'
import SectionWrapper, { itemVariants } from '../ui/SectionWrapper'

const stats = [
  { icon: <SchoolIcon />, value: '6.83 / 7', label: 'Masters GPA' },
  { icon: <MedicalServicesIcon />, value: '8+ Years', label: 'Medical Career' },
  { icon: <WorkIcon />, value: '4 Internships', label: 'Tech Roles' },
  { icon: <CodeIcon />, value: '4 Projects', label: 'Portfolio' },
]

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Medicine meets technology">
      <Grid container spacing={6} alignItems="flex-start">
        {/* Bio */}
        <Grid item xs={12} md={7}>
          <motion.div variants={itemVariants}>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'text.secondary', mb: 2.5 }}
            >
              My journey is anything but conventional. After completing my MBBS at the University of
              Malaya and spending{' '}
              <Box component="strong" sx={{ color: 'text.primary' }}>
                over eight years practicing medicine
              </Box>{' '}
              — rotating through emergency and surgery, performing C-sections and ultrasounds at Penang
              General Hospital, then running GP clinic — I made the leap into software
              development.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'text.secondary', mb: 2.5 }}
            >
              I enrolled in the{' '}
              <Box component="strong" sx={{ color: 'text.primary' }}>
                Master of Computing and Innovation
              </Box>{' '}
              at the University of Adelaide, graduating with a GPA of 6.83/7. Since then I've worked on
              AI/ML research in cardiac surgery, built an LLM-powered chatbot for a not-for-profit, and
              completed a data science internship with the UN Ocean Decade Programme in Paris.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'text.secondary' }}
            >
              The analytical rigour, calm under pressure, and patient-facing communication that medicine
              trained into me now shapes how I build software. I'm drawn to problems where technology
              and human wellbeing intersect.
            </Typography>
          </motion.div>
        </Grid>

        {/* Stat cards */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            {stats.map(stat => (
              <Grid item xs={6} key={stat.label}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 3,
                      transition: 'box-shadow 0.2s, border-color 0.2s',
                      '&:hover': {
                        boxShadow: 4,
                        borderColor: 'primary.light',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 1 }}>{stat.icon}</Box>
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      color="primary.main"
                      sx={{ fontSize: '1.2rem' }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" fontWeight={500}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  )
}

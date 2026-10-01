import { Grid, Paper, Typography, Box, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import SchoolIcon from '@mui/icons-material/School'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import SectionWrapper, { itemVariants } from '../ui/SectionWrapper'
import { education } from '../../data/education'

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education" subtitle="Degrees and ongoing study" tinted>
      <Grid container spacing={3}>
        {education.map(edu => (
          <Grid item xs={12} md={6} key={edu.degree}>
            <motion.div variants={itemVariants} style={{ height: '100%' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 4, borderColor: 'primary.light' },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  <SchoolIcon sx={{ fontSize: 38 }} />
                </Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {edu.degree}
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.main"
                  fontWeight={600}
                  gutterBottom
                >
                  {edu.institution}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {edu.period}
                </Typography>

                {edu.gpa && (
                  <Box sx={{ mt: 2 }}>
                    <Chip
                      icon={<EmojiEventsIcon sx={{ fontSize: '1rem !important' }} />}
                      label={`GPA: ${edu.gpa}`}
                      color="secondary"
                      size="small"
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>
                )}

                {edu.courses && (
                  <Box sx={{ mt: 2.5 }}>
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      color="text.secondary"
                      sx={{
                        display: 'block',
                        mb: 1,
                        textTransform: 'uppercase',
                        letterSpacing: 0.8,
                        fontSize: '0.65rem',
                      }}
                    >
                      {edu.coursesLabel ?? 'Courses'}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {edu.courses.map(c => (
                        <Chip
                          key={c}
                          label={c}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.65rem', height: 22, borderRadius: 1 }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  )
}

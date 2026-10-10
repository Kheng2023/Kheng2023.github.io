import { useState } from 'react'
import {
  Box,
  Typography,
  Chip,
  Paper,
  Collapse,
  IconButton,
} from '@mui/material'
import { motion } from 'framer-motion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SectionWrapper, { itemVariants } from '../ui/SectionWrapper'
import { experiences } from '../../data/experience'

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const toggle = (i: number) => setExpanded(prev => (prev === i ? null : i))

  return (
    <SectionWrapper id="experience" title="Work Experience" subtitle="My professional journey">
      {/* Custom timeline */}
      <Box sx={{ position: 'relative', pl: { xs: 3, md: 5 } }}>
        {/* Spine */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 9, md: 17 },
            top: 8,
            bottom: 8,
            width: 2,
            bgcolor: 'primary.main',
            opacity: 0.18,
            borderRadius: 1,
          }}
        />

        {experiences.map((exp, index) => (
          <motion.div key={`${exp.role}-${exp.company}`} variants={itemVariants}>
            <Box sx={{ position: 'relative', mb: 3 }}>
              {/* Pulsating clickable dot: a mouse shortcut, hidden from assistive tech (the IconButton is the accessible control) */}
              <Box
                aria-hidden="true"
                onClick={() => toggle(index)}
                sx={{
                  position: 'absolute',
                  left: { xs: -30, md: -38 },
                  top: 16,
                  width: 24,
                  height: 24,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 2,
                  '--dot-ring': 'rgba(27,67,50,0.6)',
                  '--dot-core-collapsed': 'rgba(43,74,63,1)',
                  '--dot-core-expanded': 'rgba(212,163,115,1)',
                }}
              >
                {/* Pulse ring */}
                <motion.div
                  animate={{ scale: [1, 1.9, 1], opacity: [0.55, 0, 0.55] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: 'var(--dot-ring)',
                  }}
                />
                {/* Solid core dot */}
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  // whileTap makes the element keyboard-focusable; keep it out of the tab order (the dot is aria-hidden)
                  tabIndex={-1}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: expanded === index ? 'var(--dot-core-expanded)' : 'var(--dot-core-collapsed)',
                    border: '2.5px solid white',
                    boxShadow: '0 0 0 2px var(--dot-core-collapsed)',
                    position: 'relative',
                    zIndex: 1,
                    flexShrink: 0,
                  }}
                />
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  border: '1px solid',
                  borderColor: expanded === index ? 'primary.light' : 'divider',
                  borderRadius: 3,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 3, borderColor: 'primary.light' },
                }}
              >
                {/* Clickable header row */}
                <Box
                  onClick={() => toggle(index)}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 1,
                    cursor: 'pointer',
                    userSelect: 'none',
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" component="h3" fontWeight={700} sx={{ lineHeight: 1.3 }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="body2" color="primary.main" fontWeight={600}>
                      {exp.company}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {exp.location} · {exp.period}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={e => {
                      // The header row also toggles on click; don't let this click reach it too
                      e.stopPropagation()
                      toggle(index)
                    }}
                    aria-expanded={expanded === index}
                    aria-label={expanded === index ? 'Collapse details' : 'Expand details'}
                    sx={{ mt: -0.5, color: expanded === index ? 'primary.main' : 'text.secondary' }}
                  >
                    <ExpandMoreIcon
                      fontSize="small"
                      sx={{
                        transform: expanded === index ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s',
                      }}
                    />
                  </IconButton>
                </Box>

                {/* Summary */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1.5, lineHeight: 1.7 }}
                >
                  {exp.summary}
                </Typography>

                {/* Skill chips */}
                <Box sx={{ display: 'flex', gap: 0.6, flexWrap: 'wrap', mt: 1.5 }}>
                  {exp.skills.map(skill => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      variant="outlined"
                      color="primary"
                      sx={{ fontSize: '0.68rem', height: 22, borderRadius: 1 }}
                    />
                  ))}
                </Box>

                {/* Expandable achievements */}
                <Collapse in={expanded === index}>
                  <Box
                    sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}
                  >
                    <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                      Key Achievements
                    </Typography>
                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {exp.achievements.map((ach, i) => (
                        <Box component="li" key={i} sx={{ mb: 0.75 }}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ lineHeight: 1.7 }}
                          >
                            {ach}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Collapse>
              </Paper>
            </Box>
          </motion.div>
        ))}
      </Box>
    </SectionWrapper>
  )
}

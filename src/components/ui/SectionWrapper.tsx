import { Box, Container, Typography, Divider, type SxProps, type Theme } from '@mui/material'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  tinted?: boolean
  sx?: SxProps<Theme>
}

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  tinted = false,
  sx,
}: SectionWrapperProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: tinted ? 'action.hover' : 'background.default',
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={itemVariants}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="overline"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 700,
                  letterSpacing: 2.5,
                  fontSize: '0.7rem',
                }}
              >
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mt: 0.5,
                    fontSize: { xs: '1.75rem', md: '2.25rem' },
                    lineHeight: 1.2,
                  }}
                >
                  {subtitle}
                </Typography>
              )}
              <Divider
                sx={{
                  mt: 2,
                  width: 56,
                  borderWidth: 3,
                  borderColor: 'primary.main',
                  borderRadius: 2,
                }}
              />
            </Box>
          </motion.div>
          {children}
        </motion.div>
      </Container>
    </Box>
  )
}

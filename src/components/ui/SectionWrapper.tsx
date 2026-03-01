import { Box, Container, Typography, Divider, type SxProps, type Theme } from '@mui/material'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  tinted?: boolean
  tone?: 'tech' | 'medical'
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
  tone = 'tech',
  sx,
}: SectionWrapperProps) {
  const headingColor = tone === 'medical' ? 'secondary.main' : 'primary.main'
  const sectionBackground =
    tinted
      ? tone === 'medical'
        ? 'rgba(96,108,56,0.08)'
        : 'rgba(27,67,50,0.05)'
      : 'background.default'

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: sectionBackground,
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
                  color: headingColor,
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
                  borderColor: 'warning.main',
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

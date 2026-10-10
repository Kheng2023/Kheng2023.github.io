import { Box, Container, Typography, IconButton, Divider } from '@mui/material'
import { motion } from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box
        component="footer"
        sx={{
          py: 5,
          bgcolor: 'background.paper',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="body2"
                fontWeight={600}
                color="text.primary"
                sx={{ mb: 0.25 }}
              >
                Yong Kheng Beh
              </Typography>
              <Typography variant="caption" color="text.secondary">
                © {new Date().getFullYear()} · Software Engineer & Doctor
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <IconButton
                aria-label="Email"
                size="small"
                onClick={() => {
                  // Built at click time so the full address never appears in the page HTML
                  window.location.href = `mailto:${['yongkhengbeh+site', 'gmail.com'].join('@')}`
                }}
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <EmailIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/yong-kheng-beh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                href="https://github.com/Kheng2023"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                size="small"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Divider sx={{ mt: 3, mb: 2 }} />

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', textAlign: 'center' }}
          >
            Built with React, MUI & Framer Motion · Deployed on GitHub Pages
          </Typography>
        </Container>
      </Box>
    </motion.div>
  )
}

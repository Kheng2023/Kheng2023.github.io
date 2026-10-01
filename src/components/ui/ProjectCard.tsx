import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  Button,
  IconButton,
} from '@mui/material'
import { motion } from 'framer-motion'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'
import type { Project } from '../../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const isYouTube = project.githubUrl?.includes('youtube.com')

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ height: '100%' }}
    >
      <Card
        elevation={0}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          overflow: 'hidden',
          transition: 'box-shadow 0.25s, border-color 0.25s',
          '&:hover': {
            boxShadow: 8,
            borderColor: 'primary.light',
          },
        }}
      >
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          loading="lazy"
          sx={{
            aspectRatio: '2 / 1',
            objectFit: 'cover',
            objectPosition: 'top',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom sx={{ fontSize: '1rem' }}>
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2.5, lineHeight: 1.75 }}
          >
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {project.tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ fontSize: '0.7rem', height: 24, borderRadius: 1 }}
              />
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ px: 3, pb: 2.5, gap: 1, flexWrap: 'wrap' }}>
          {project.liveUrl && (
            <Button
              size="small"
              variant="contained"
              href={project.liveUrl}
              target={project.liveUrl.startsWith('/') ? undefined : '_blank'}
              rel={project.liveUrl.startsWith('/') ? undefined : 'noopener noreferrer'}
              endIcon={<OpenInNewIcon sx={{ fontSize: '0.85rem !important' }} />}
              sx={{ fontSize: '0.78rem' }}
            >
              {project.liveLabel ?? 'View Project'}
            </Button>
          )}
          {project.githubUrl && (
            <IconButton
              size="small"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              aria-label={isYouTube ? 'Watch on YouTube' : 'GitHub repository'}
              sx={{ '&:hover': { color: 'primary.main' } }}
            >
              {isYouTube ? <YouTubeIcon fontSize="small" /> : <GitHubIcon fontSize="small" />}
            </IconButton>
          )}
        </CardActions>
      </Card>
    </motion.div>
  )
}

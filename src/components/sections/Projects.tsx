import { Grid } from '@mui/material'
import { motion } from 'framer-motion'
import SectionWrapper, { containerVariants } from '../ui/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Things I've built" tinted>
      <motion.div variants={containerVariants}>
        <Grid container spacing={3}>
          {projects.map(project => (
            <Grid item xs={12} sm={6} key={project.title} sx={{ display: 'flex' }}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </SectionWrapper>
  )
}

import { useState } from 'react'
import { Box, Typography, Paper, Collapse, IconButton, Grid, Link } from '@mui/material'
import { motion } from 'framer-motion'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import VerifiedIcon from '@mui/icons-material/Verified'
import SectionWrapper, { itemVariants } from '../ui/SectionWrapper'

const medicalRoles = [
  {
    role: 'Houseman (Trainee Doctor)',
    place: 'Hospital Kulim, Kedah',
    period: '2014 – 2016',
    summary:
      'Two-year rotational training across six core departments: Orthopaedics, Internal Medicine, Obstetrics & Gynaecology, Emergency, Paediatrics, and Surgery.',
    achievements: [
      'Conducted patient history-taking, daily ward rounds, and reviewed test results with supervising doctors.',
      'Performed phlebotomy, vaginal deliveries, suturing, IV line insertions, urinary catheterization, and minor surgical interventions.',
      'Assisted medical officers and specialists in major surgical procedures.',
    ],
  },
  {
    role: 'Medical Officer',
    place: 'Penang General Hospital',
    period: '2016 – 2018',
    summary:
      'Obstetrics & Gynaecology Department — managed complex high-risk cases in a high-pressure hospital environment.',
    achievements: [
      'Managed high-risk pregnancies, labour, and emergency deliveries.',
      'Performed over 50 C-sections and assisted in gynaecological surgeries.',
      'Conducted over 1,000 transabdominal ultrasounds for obstetric and gynaecological patients.',
      'Supervised and mentored house officers, ensuring smooth clinic operations.',
      'Facilitated the 2017 Maternal-Fetal Medicine Conference in Malaysia.',
    ],
  },
  {
    role: 'General Practitioner',
    place: 'Dr. (Mdm) Ooi Clinic, Penang, Malaysia',
    period: '2018 – 2022',
    summary: 'Provided comprehensive medical care in a busy community clinic setting.',
    achievements: [
      'Diagnosed and managed a wide range of medical conditions.',
      'Conducted patient consultations, examinations, and follow-up care.',
      'Ordered and interpreted lab tests to guide treatment decisions.',
      'Handled administrative responsibilities, ensuring efficient clinic operations.',
    ],
  },
]

const transferableSkills = [
  {
    skill: 'Analytical Thinking',
    desc: 'Diagnosing complex conditions with incomplete data → debugging and system design',
  },
  {
    skill: 'High-Stakes Decisions',
    desc: 'Emergency medicine under pressure → prioritising critical engineering tasks',
  },
  {
    skill: 'Stakeholder Communication',
    desc: 'Explaining complex diagnoses to patients → translating technical detail to non-technical audiences',
  },
  {
    skill: 'Precise Documentation',
    desc: 'Clinical notes and procedure records → technical documentation and code clarity',
  },
  {
    skill: 'Continuous Learning',
    desc: 'Staying current with medical literature → keeping pace with rapidly evolving technology',
  },
  {
    skill: 'Team Collaboration',
    desc: 'Multi-disciplinary ward rounds → cross-functional software engineering teams',
  },
]

export default function DoctorCareer() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const toggle = (i: number) => setExpanded(prev => (prev === i ? null : i))

  return (
    <SectionWrapper id="medical" title="Medical Career" subtitle="Eight years in medicine">
      {/* Intro */}
      <motion.div variants={itemVariants}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'text.secondary',
            mb: 5,
            maxWidth: 760,
          }}
        >
          Before transitioning into software development, I spent over eight years in the medical
          field — gaining hands-on experience in patient care, emergency response, and surgical
          procedures. My journey as a doctor equipped me with critical thinking, precision, and
          adaptability. These skills now shape how I approach engineering problems.
        </Typography>
      </motion.div>

      {/* Skills Bridge callout */}
      <motion.div variants={itemVariants}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mb: 6,
            border: '1px solid',
            borderColor: 'secondary.main',
            borderLeft: '4px solid',
            borderLeftColor: 'secondary.main',
            borderRadius: 3,
            bgcolor: theme =>
              theme.palette.mode === 'dark'
                ? 'rgba(251,146,60,0.07)'
                : 'rgba(249,115,22,0.05)',
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            gutterBottom
            sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}
          >
            <MedicalServicesIcon color="secondary" fontSize="small" />
            Transferable Skills: Medicine → Software
          </Typography>
          <Grid container spacing={2}>
            {transferableSkills.map(s => (
              <Grid item xs={12} sm={6} key={s.skill}>
                <Box>
                  <Typography variant="body2" fontWeight={700} color="secondary.main">
                    {s.skill}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5 }}>
                    {s.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>

      {/* Medical timeline */}
      <Box sx={{ position: 'relative', pl: { xs: 3, md: 5 } }}>
        {/* Spine */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 9, md: 17 },
            top: 8,
            bottom: 8,
            width: 2,
            bgcolor: 'secondary.main',
            opacity: 0.2,
            borderRadius: 1,
          }}
        />

        {medicalRoles.map((role, index) => (
          <motion.div key={role.role} variants={itemVariants}>
            <Box sx={{ position: 'relative', mb: 3 }}>
              {/* Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: -23, md: -31 },
                  top: 20,
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
                  border: '2.5px solid',
                  borderColor: 'background.default',
                  zIndex: 1,
                }}
              />

              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  transition: 'box-shadow 0.2s, border-color 0.2s',
                  '&:hover': { boxShadow: 3, borderColor: 'secondary.light' },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 1,
                    flexWrap: 'wrap',
                  }}
                >
                  <Box>
                    <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1.3 }}>
                      {role.role}
                    </Typography>
                    <Typography variant="body2" color="secondary.main" fontWeight={600}>
                      {role.place}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {role.period}
                    </Typography>
                  </Box>
                  <IconButton
                    size="small"
                    onClick={() => toggle(index)}
                    aria-expanded={expanded === index}
                    aria-label={expanded === index ? 'Collapse details' : 'Expand details'}
                    sx={{ mt: -0.5 }}
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

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1.5, lineHeight: 1.7 }}
                >
                  {role.summary}
                </Typography>

                <Collapse in={expanded === index}>
                  <Box
                    sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}
                  >
                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {role.achievements.map((ach, i) => (
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

      {/* Why I transitioned */}
      <motion.div variants={itemVariants}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            mt: 2,
            mb: 3,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
          }}
        >
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Why I Transitioned to Tech
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            While working as a doctor, I developed an interest in data analysis and AI applications in
            healthcare. Over time, I realised that problem-solving in medicine and programming share
            many similarities — both require analytical thinking, continuous learning, and precision.
            This led me to pursue a Master's in Computing and Innovation, ultimately transitioning into
            software development.
          </Typography>
        </Paper>
      </motion.div>

      {/* MMC licence */}
      <motion.div variants={itemVariants}>
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            display: 'flex',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <VerifiedIcon color="primary" sx={{ mt: 0.25, flexShrink: 0 }} />
          <Typography variant="body2" color="text.secondary">
            I still hold a valid medical licence in Malaysia, registered with the Malaysian Medical
            Council (MMC).{' '}
            <Link
              href="https://merits.mmc.gov.my/search/registeredDoctor?name=Beh+Yong+Kheng&graduateFrom=&place-of-practice=&tindakanSiasatan=&full=&provisional=&tpc="
              target="_blank"
              rel="noopener noreferrer"
              fontWeight={600}
            >
              Verify my registration here
            </Link>
            .
          </Typography>
        </Paper>
      </motion.div>
    </SectionWrapper>
  )
}

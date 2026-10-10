// Machine-readable views of the site content, generated at build time by
// scripts/prerender.mjs. Derived from src/data so they never drift from the page.
import { experiences } from './data/experience'
import { education } from './data/education'
import { projects } from './data/projects'
import { medicalRoles } from './data/medical'

export const SITE_URL = 'https://kheng2023.github.io/'

const NAME = 'Yong Kheng Beh'
const PROFILES = ['https://github.com/Kheng2023', 'https://www.linkedin.com/in/yong-kheng-beh']
const SUMMARY =
  'Software engineer at Vocare Speech in Adelaide, South Australia, specialising in full-stack TypeScript (Next.js, React, Supabase) and AI-assisted development. Former doctor (MBBS, University of Malaya) with 8+ years in medicine, and a Master of Computing and Innovation (GPA 6.83/7) from the University of Adelaide.'

// The first experience entry is the current role.
const current = experiences[0]

// schema.org Person: lets search engines and LLMs identify who the site is about.
export function personJsonLd(): string {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: NAME,
    url: SITE_URL,
    image: `${SITE_URL}images/profile-500px.jpg`,
    description: SUMMARY,
    jobTitle: current.role,
    worksFor: { '@type': 'Organization', name: current.company, url: current.companyUrl },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Adelaide' },
      { '@type': 'CollegeOrUniversity', name: 'University of Malaya' },
    ],
    award: 'Infoxchange CEO Award – Volunteer of the Year 2026',
    knowsAbout: ['TypeScript', 'React', 'Next.js', 'Supabase', 'PostgreSQL', 'Python', 'Drupal', 'Medicine'],
    sameAs: PROFILES,
  }
  // Escape "<" so content can never close the surrounding <script> tag early.
  return JSON.stringify(person).replace(/</g, '\\u003c')
}

// llms.txt (https://llmstxt.org): a plain-markdown summary for AI tools.
export function llmsTxt(): string {
  const lines = [
    `# ${NAME}`,
    '',
    `> ${SUMMARY}`,
    '',
    `Website: ${SITE_URL}`,
    ...PROFILES.map(url => `Profile: ${url}`),
    '',
    '## Experience',
    ...experiences.flatMap(exp => [
      '',
      `### ${exp.role} — ${exp.company} (${exp.location}, ${exp.period})`,
      exp.summary,
      ...exp.achievements.map(a => `- ${a}`),
      `Skills: ${exp.skills.join(', ')}`,
    ]),
    '',
    '## Projects',
    '',
    ...projects.map(p => {
      const links = [p.liveUrl, p.githubUrl].filter(Boolean).join(' · ')
      return `- **${p.title}**: ${p.description}${links ? ` (${links})` : ''}`
    }),
    '',
    '## Education',
    '',
    ...education.map(
      e => `- ${e.degree} — ${e.institution} (${e.period})${e.gpa ? `, GPA ${e.gpa}` : ''}`,
    ),
    '',
    '## Medical career',
    ...medicalRoles.flatMap(r => [
      '',
      `### ${r.role} — ${r.place} (${r.period})`,
      r.summary,
      ...r.achievements.map(a => `- ${a}`),
    ]),
    '',
  ]
  return lines.join('\n')
}

// Home page plus project pages hosted on this domain.
export function sitemapXml(): string {
  const urls = [SITE_URL, ...projects.flatMap(p => p.liveUrl ?? []).filter(url => url.startsWith(SITE_URL))]
  const entries = urls.map(url => `  <url><loc>${url.replace(/&/g, '&amp;')}</loc></url>`).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
}

export interface Project {
  title: string
  description: string
  image: string
  // Describes what the image shows; the card title is already read out separately
  imageAlt: string
  tags: string[]
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
  githubLabel?: string
}

export const projects: Project[] = [
  {
    title: 'Talk: How I Navigate Agentic Coding as a Junior Software Engineer in a Startup',
    description:
      'My talk at the Adelaide Claude Code Meetup (Stone & Chalk, August 2026) — how far I trust AI, the workflow, audits and tools I use to keep a codebase clean, and where the human stays in the loop. The slides are rebuilt as a dependency-free HTML/CSS/JS deck.',
    image: '/images/project-agentic-coding-talk.webp',
    imageAlt:
      'Yong Kheng presenting at the Adelaide Claude Code Meetup at Stone & Chalk, microphone in hand, to a seated audience',
    tags: ['Public Speaking', 'Claude Code', 'Agentic Coding', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://kheng2023.github.io/how-i-navigate-agentic-coding/',
    liveLabel: 'View Slides',
    githubUrl: 'https://github.com/Kheng2023/how-i-navigate-agentic-coding',
    githubLabel: 'GitHub',
  },
  {
    title: '12 Week Year Tracker',
    description:
      'A privacy-first PWA for goal tracking based on The 12 Week Year — define 12-week cycles with goals and weekly tactics, score your execution on a weekly scorecard, and review progress with interactive charts. All data stays in your browser via SQLite/WASM.',
    image: '/images/project-12-week-year.webp',
    imageAlt:
      '12 Week Year dashboard showing a 90% overall execution score and a weekly score trend chart above the 85% target line',
    tags: ['React', 'TypeScript', 'MUI', 'SQLite', 'PWA', 'Recharts'],
    liveUrl: 'https://kheng2023.github.io/12-week-year/',
    liveLabel: 'Live Demo',
    githubUrl: 'https://github.com/Kheng2023/12-week-year',
    githubLabel: 'GitHub',
  },
  {
    title: 'SACommunity Chatbot',
    description:
      'AI-powered chatbot using Retrieval-Augmented Generation (RAG) to enhance search across a not-for-profit community directory with 14,000+ records. Integrates LangChain, Flask, and Docker.',
    image: '/images/project-chatbot.webp',
    imageAlt:
      'SAcommunity directory home page with the chatbot panel open, greeting the user',
    tags: ['Python', 'LangChain', 'Flask', 'Docker', 'RAG', 'LLM'],
    liveUrl: 'https://sacommunity.org/node/1202',
    liveLabel: 'Project Report',
    githubUrl: 'https://github.com/Kheng2023/SACommunityChatbot',
    githubLabel: 'GitHub',
  },
  {
    title: 'Drupal Migration Guides Blog',
    description:
      'Technical blog documenting the Drupal 11 migration of SAcommunity.org — covering site migration strategies, ETL processes, and lessons learned along the way.',
    image: '/images/project-drupal-migration-blog.webp',
    imageAlt:
      'Home page of the SAcommunity Drupal Migration Guide blog, introducing a guide for volunteers',
    tags: ['Drupal 11', 'PHP', 'MySQL', 'Jekyll', 'Technical Writing'],
    liveUrl: 'https://kheng2023.github.io/Drupal-Migration-Blog/',
    liveLabel: 'Visit Blog',
  },
  {
    title: 'Parachute Flower',
    description:
      'A web app for the Flower Exercise from "What Color Is Your Parachute?" — explore 7 career dimensions using pairwise comparisons, then generate a printable SVG flower diagram of your priorities. Auto-saves to localStorage.',
    image: '/images/project-parachute-flower.webp',
    imageAlt:
      'Completed career flower diagram with seven coloured petals, each listing ranked priorities around a centre labelled My Ideal Job',
    tags: ['React', 'JavaScript', 'Vite', 'SVG', 'GitHub Copilot'],
    liveUrl: 'https://kheng2023.github.io/parachute-flower/',
    liveLabel: 'Live Demo',
    githubUrl: 'https://github.com/Kheng2023/parachute-flower',
    githubLabel: 'GitHub',
  },
]

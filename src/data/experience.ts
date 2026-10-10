export interface WorkItem {
  role: string
  company: string
  location: string
  period: string
  summary: string
  skills: string[]
  achievements: string[]
}

export const experiences: WorkItem[] = [
  {
    role: 'Software Engineer',
    company: 'Vocare Speech Australia',
    location: 'Adelaide, South Australia',
    period: 'Mar 2026 – Present',
    summary:
      "Sole engineer on Vocare's production pronunciation-training platform. I led the new platform (V2) through its migration from Firebase to Supabase and Vercel, launched it to users, and rebuilt the company website.",
    skills: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vercel', 'MUI', 'Vitest', 'Playwright', 'Claude Code'],
    achievements: [
      'Platform Migration: Building on an initial foundation from a contract team, completed the migration of the production app from Firebase (Firestore, Cloud Functions, Hosting) to Next.js, Supabase (Postgres) and Vercel as the sole engineer. V2 is now live and the Firebase version has been retired.',
      'Website Redevelopment: Designed and built the new vocare.com.au on my own, replacing a single static HTML page with a Next.js, React and TypeScript site on Vercel, backed by unit and end-to-end tests.',
      'Production Ownership: Own the platform end to end — features, database schema changes, CI, error monitoring, and dependency security patches.',
      'Accessibility: Remediated the marketing site against WCAG 2.2 AA across theme, navigation, motion and forms.',
      'Agentic Engineering: Deliver full-stack work solo with Claude Code inside a disciplined workflow of tests, reviews and codebase audits — the subject of my talk at the Adelaide Claude Code Meetup.',
    ],
  },
  {
    role: 'Volunteer Developer – SAcommunity.org Rebuild',
    company: 'Connecting Up / Infoxchange',
    location: 'Adelaide, South Australia',
    period: 'Jan 2025 – Present',
    summary:
      'Rebuilding SAcommunity.org, a South Australian community directory, in Drupal 11. Started in a cross-functional volunteer team, then returned in March 2026 to finish the rebuild on my own; the not-for-profit has seen the demo and wants to publish it. Infoxchange CEO Award – Volunteer of the Year 2026.',
    skills: ['Drupal 11', 'PHP', 'MySQL', 'Docker', 'Python', 'ETL', 'Claude Code'],
    achievements: [
      'Recognition: Awarded the Infoxchange CEO Award – Volunteer of the Year (August 2026).',
      'Solo Rebuild: Returned in March 2026 and rebuilt the site on a clean Drupal 11 codebase on my own, including a redesign of the website.',
      'Streamlined Migration: Combined the data-cleansing Python scripts and Drupal Migration YAML into one streamlined, repeatable migration process.',
      'Stakeholder Demo: Demoed the rebuilt site to the not-for-profit, who now want to publish it.',
      'Gathered and analysed requirements in collaboration with the Directory Manager and Connecting Up leadership to guide redevelopment priorities.',
      'Created detailed, step-by-step onboarding guides in GitHub and maintained a GitHub Project Kanban board to coordinate the volunteer team.',
      'Leveraged LLMs (Gemini) to transform unstructured data into structured formats for database integration.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Vocare Speech Australia',
    location: 'Adelaide, South Australia',
    period: 'Dec 2025 – Feb 2026',
    summary:
      'Primary in-house developer for the production app (V1), and technical point of contact between the founders and the contract team building the new platform (V2).',
    skills: ['React', 'TypeScript', 'Firebase', 'GitHub Copilot', 'Notion', 'QA'],
    achievements: [
      'Production Maintenance: Fixed a large number of critical bugs in the live app — including mobile layout issues and audio playback errors — to ensure the system ran smoothly for active users.',
      'Performance Improvements: Reduced cloud costs and improved app speed by setting up caching and optimising Firebase database queries.',
      'AI-Assisted Development: Leveraged GitHub Copilot to accelerate development — using it to understand undocumented legacy code and rapidly build new features such as workshop reminders and progress bars in React and TypeScript.',
      'Quality Assurance: Reviewed V2 builds against the existing app so business requirements carried over cleanly to the new platform.',
      'Process Improvement: Set up a structured bug-logging system on Notion, enabling the CEO and non-technical staff to report issues accurately and improving overall engineering visibility.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Corcillum',
    location: 'Adelaide, South Australia',
    period: 'Oct 2025 – Feb 2026',
    summary:
      'Annotated coronary angiogram images, leveraging medical background to ensure accurate, clinically reliable data for machine learning model training.',
    skills: ['Medical Image Annotation', 'Data Quality Assurance', 'Team Collaboration'],
    achievements: [
      'Annotated coronary angiogram images with high accuracy, leveraging medical training to ensure clinically reliable labels for AI model development.',
      'Provided structured feedback on annotation software performance, usability, and workflow to help improve tool efficiency and user experience.',
      'Developed clear annotation guidelines to support new annotators, based on best practices refined through consistent, high-quality annotation work.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'IOC-UNESCO – Ocean Decade Programme',
    location: 'Paris, France (Remote)',
    period: 'Jun – Sep 2025',
    summary:
      'Selected for a competitive internship to support data management and analysis for the UN Ocean Decade programme. Cleaned data, designed a relational database, and collaborated with a global team.',
    skills: ['Python', 'Data Cleaning', 'NLP', 'Relational Database Design', 'Data Visualisation', 'Remote Collaboration'],
    achievements: [
      'Cleaned and standardised all datasets collected by the UN Ocean Decade programme over the past five years to improve data quality and usability.',
      'Designed an interactive data schema and built a relational database to support long-term data management and analysis.',
      'Documented the full database structure to ensure clarity, maintainability, and smooth handover for future developers.',
      'Reviewed technical requirements for an upcoming full-stack platform where the database will be integrated.',
      'Coordinated updates with the broader Ocean Decade Team to validate and align newly received data with the database design.',
      'Recognised for outstanding performance, strong accountability, and exceptional work ethic throughout the assignment.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'YourAnswer International Pty Ltd',
    location: 'Adelaide, South Australia',
    period: 'Jul – Oct 2024',
    summary:
      'Developed automated evaluation software to compare semantic search performance across embedding models, chunking methods, and vector stores.',
    skills: ['Python', 'Bash', 'Docker', 'OpenSearch', 'Embeddings', 'Vector Search', 'AI/ML'],
    achievements: [
      'Developed a Python-based testing framework, automated via shell scripts, to streamline semantic search evaluation — significantly reducing manual testing time.',
      'Conducted extensive benchmarking with top-ranked embedding models from the MTEB leaderboard on Hugging Face.',
      'Benchmarked and optimised semantic search performance across multiple vector stores, including OpenSearch.',
      'Resolved a critical semantic ranking bug — identified cosine distance vs similarity scoring mismatch, significantly improving search accuracy and result relevance.',
      'Produced comprehensive technical reports to ensure effective knowledge transfer.',
    ],
  },
  {
    role: 'Industry Project Intern',
    company: 'Connecting Up / Infoxchange',
    location: 'Adelaide, South Australia',
    period: 'Mar – Jun 2024',
    summary:
      'Led backend development for a full-stack AI-powered chatbot as part of a four-member team for SAcommunity.org, a community directory website.',
    skills: ['Python', 'LangChain', 'Flask', 'Docker', 'Prompt Engineering', 'Agile'],
    achievements: [
      'Led backend development, integrating LangChain for LLM-based tool calls and semantic search — resulting in an Agentic RAG chatbot capable of handling vague human queries with high accuracy.',
      'Optimised chatbot performance through advanced prompt engineering and retrieval strategies to improve response relevance.',
      'Deployed the chatbot using Docker, resolving compatibility issues within an outdated software environment.',
      'Collaborated closely with frontend developers and stakeholders to refine chatbot functionality for real-world use cases.',
    ],
  },
  {
    role: 'Research Intern – Machine Learning in Cardiac Surgery',
    company: 'Australian Institute of Machine Learning (AIML)',
    location: 'Adelaide, South Australia',
    period: 'Dec 2023 – Feb 2024',
    summary:
      'Awarded AIML Summer Research Project Scholarship — applying a unique blend of medical and computing knowledge to advance AI applications in cardiology.',
    skills: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-Learn', 'Machine Learning'],
    achievements: [
      'Collaborated with healthcare experts and ML specialists to explore AI-driven decision-making solutions for medical applications.',
      'Processed and analysed a large-scale healthcare dataset with 6,000+ patient records, developing ML models to predict patient outcomes.',
      'Researched and reviewed AI-driven predictive analytics in healthcare, integrating insights into model design.',
      'Presented research findings to a panel of researchers at the end of the internship.',
    ],
  },
]

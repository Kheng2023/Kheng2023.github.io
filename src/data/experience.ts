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
    role: 'Software Engineer Intern',
    company: 'Vocare Speech Australia',
    location: 'Adelaide, South Australia',
    period: 'Dec 2025 – Feb 2026',
    summary:
      'Primary in-house developer responsible for maintaining the production app (V1) and serving as technical liaison between the founders and the external team building the new platform (V2).',
    skills: ['React', 'TypeScript', 'Firebase', 'GitHub Copilot', 'Notion', 'QA'],
    achievements: [
      'Production Maintenance: Fixed a large number of critical bugs in the live app — including mobile layout issues and audio playback errors — to ensure the system ran smoothly for active users.',
      'Performance Improvements: Reduced cloud costs and improved app speed by setting up caching and optimising Firebase database queries.',
      'AI-Assisted Development: Leveraged GitHub Copilot to accelerate development — using it to understand undocumented legacy code and rapidly build new features such as workshop reminders and progress bars in React and TypeScript.',
      "Quality Assurance: Acted as the internal technical expert reviewing the external team's V2 build, ensuring key business requirements from the current version were not missed.",
      'Process Improvement: Set up a structured bug-logging system on Notion, enabling the CEO and non-technical staff to report issues accurately and improving overall engineering visibility.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Corcillum',
    location: 'Adelaide, South Australia',
    period: 'Oct 2025 – Present',
    summary:
      'Annotating coronary angiogram images leveraging medical background to ensure accurate, clinically reliable data for machine learning model training.',
    skills: ['Medical Image Annotation', 'Data Quality Assurance', 'Team Collaboration'],
    achievements: [
      'Annotating coronary angiogram images with high accuracy, leveraging medical training to ensure clinically reliable labels for AI model development.',
      'Providing structured feedback on annotation software performance, usability, and workflow to help improve tool efficiency and user experience.',
      'Developing clear annotation guidelines to support new annotators, based on best practices refined through consistent, high-quality annotation work.',
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
    role: 'Volunteer – Website Rebuild Team',
    company: 'Connecting Up / Infoxchange',
    location: 'Adelaide, South Australia',
    period: 'Jan 2025 – Present',
    summary:
      'Contributing to the rebuild of SAcommunity.org as part of a cross-functional volunteer team using Drupal 11, Python ETL pipelines, and Agile practices.',
    skills: ['Drupal 11', 'PHP', 'MySQL', 'Docker', 'Agile', 'Python', 'ETL'],
    achievements: [
      'Redeveloped SAcommunity.org to improve functionality, performance, and user experience using Drupal, MySQL, and Docker.',
      'Gathered and analysed requirements in collaboration with the Directory Manager and Connecting Up leadership to guide redevelopment priorities.',
      'Created detailed, step-by-step onboarding guides in GitHub to streamline volunteer collaboration.',
      'Set up and maintained a GitHub Project Kanban board, coordinating task allocation across the volunteer team.',
      'Led the ETL process — developed Python scripts for data cleansing and authored Drupal Migration YAML for seamless data import.',
      'Leveraged LLMs (Gemini) to transform unstructured data into structured formats for database integration.',
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

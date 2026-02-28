export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
  githubLabel?: string
}

export const projects: Project[] = [
  {
    title: 'SACommunity Chatbot',
    description:
      'AI-powered chatbot using Retrieval-Augmented Generation (RAG) to enhance search across a not-for-profit community directory with 14,000+ records. Integrates LangChain, Flask, and Docker.',
    image: '/images/project-chatbot-500px.jpg',
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
    image: '/images/project-drupal-migration-blog-500px.jpg',
    tags: ['Drupal 11', 'PHP', 'MySQL', 'Jekyll', 'Technical Writing'],
    liveUrl: 'https://kheng2023.github.io/Drupal-Migration-Blog/',
    liveLabel: 'Visit Blog',
  },
  {
    title: 'LeetCode Diary',
    description:
      'A personal learning diary documenting my journey solving LeetCode problems — covering algorithms, data structures, and problem-solving patterns with explanations and video walkthroughs.',
    image: '/images/project-leetcode-500px.jpg',
    tags: ['Python', 'Algorithms', 'Data Structures', 'OOP'],
    liveUrl: 'https://kheng2023.github.io/leetcode-diary/',
    liveLabel: 'Read Diary',
    githubUrl: 'https://github.com/Kheng2023/leetcode-diary',
    githubLabel: 'GitHub',
  },
  {
    title: 'Priority Matrix',
    description:
      'A web-based priority matrix tool inspired by "What Color Is Your Parachute?" — helps users compare and rank up to 10 items to discover personal priorities. Built with React and GitHub Copilot.',
    image: '/images/project-priority-matrix-500px.jpg',
    tags: ['React', 'JavaScript', 'GitHub Copilot', 'UI/UX'],
    liveUrl: 'https://kheng2023.github.io/priority-matrix/',
    liveLabel: 'Live Demo',
    githubUrl: 'https://github.com/Kheng2023/priority-matrix',
    githubLabel: 'GitHub',
  },
]

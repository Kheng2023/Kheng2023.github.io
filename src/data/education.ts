export interface EducationItem {
  degree: string
  institution: string
  period: string
  gpa?: string
  courses?: string[]
  coursesLabel?: string
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Computing and Innovation',
    institution: 'University of Adelaide, Australia',
    period: '2023 – 2024',
    gpa: '6.83 / 7',
    courses: [
      'Computer Networks & Applications',
      'Introduction to Statistical Machine Learning',
      'Computer Systems',
      'Operating Systems',
      'Algorithm and Data Structure Analysis',
      'Software Engineering and Project',
      'Project Management Fundamentals',
    ],
  },
  {
    degree: 'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
    institution: 'University of Malaya, Malaysia',
    period: '2009 – 2014',
  },
  {
    degree: 'Google UX Design Professional Certificate',
    institution: 'Google · Coursera',
    period: 'Jun 2026 – In progress',
    coursesLabel: 'Completed so far · course 6 in progress',
    courses: [
      'Foundations of User Experience (UX) Design',
      'Start the UX Design Process: Empathize, Define, and Ideate',
      'Build Wireframes and Low-Fidelity Prototypes',
      'Conduct UX Research and Test Early Concepts',
      'Create High-Fidelity Designs and Prototypes in Figma',
    ],
  },
]

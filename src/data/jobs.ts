export interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  description: string
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '₦400,000',
    description: 'Build responsive user interfaces with modern React and reusable component patterns.',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'Dev Solutions',
    location: 'Enugu',
    salary: '₦300,000',
    description: 'Design and optimize APIs, services, and data flows for scalable systems.',
  },
  {
    id: 3,
    title: 'Fullstack Developer',
    company: 'Wave Labs',
    location: 'Lagos',
    salary: '₦450,000',
    description: 'Work across frontend and backend to deliver polished web applications.',
  },
  {
    id: 4,
    title: 'UI/UX Engineer',
    company: 'Pixel Hive',
    location: 'Remote',
    salary: '₦380,000',
    description: 'Translate design systems into accessible, user-friendly interface experiences.',
  },
  {
    id: 5,
    title: 'DevOps Specialist',
    company: 'Cloud Nexus',
    location: 'Abuja',
    salary: '₦420,000',
    description: 'Implement CI/CD pipelines and infrastructure automation for production delivery.',
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'Onitsha',
    salary: '₦340,000',
    description: 'Build performant mobile experiences using cross-platform or native technologies.',
  },
  {
    id: 7,
    title: 'Data Engineer',
    company: 'Insight Grid',
    location: 'Port Harcourt',
    salary: '₦390,000',
    description: 'Create data pipelines and support analytical systems for business insights.',
  },
  {
    id: 8,
    title: 'Quality Assurance Analyst',
    company: 'Testify',
    location: 'Ibadan',
    salary: '₦280,000',
    description: 'Write test plans and automate workflows to keep releases stable and reliable.',
  },
  {
    id: 9,
    title: 'Product Manager',
    company: 'LaunchPad',
    location: 'Lagos',
    salary: '₦500,000',
    description: 'Lead product strategy, coordinate teams, and shape feature delivery roadmaps.',
  },
  {
    id: 10,
    title: 'Technical Writer',
    company: 'DocuBase',
    location: 'Remote',
    salary: '₦260,000',
    description: 'Create clear developer documentation, guides, and product help content.',
  },
]

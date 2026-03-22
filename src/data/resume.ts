export const personal = {
  name: 'Prashant Kumar Gupta',
  title: 'Senior Software Engineer III',
  company: 'Expedia Group',
  location: 'Gurugram, Haryana',
  email: 'prashanthkgupta@gmail.com',
  phone: '+91 9889059224',
  tagline:
    'Backend engineer building high-scale distributed systems. Passionate about performance, clean architecture, and shipping impactful products.',
  resumeUrl: '/portfolio/Prashant_Gupta.pdf',
  socials: {
    github: 'https://github.com/prashanthkgupta',
    linkedin: 'https://linkedin.com/in/prashanthkgupta',
    leetcode: 'https://leetcode.com/prashanthkgupta',
  },
};

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: 'Senior Software Engineer III',
    company: 'Expedia Group',
    period: 'Dec 2024 — Present',
    highlights: [
      'Owned the solution and led a team of 3 developers to deliver an end-to-end Elasticsearch lookup indexing strategy that doubled throughput and reduced query latency by 30%, lowering infra costs while enabling 2× traffic capacity.',
      'Architected adapter integrations for onboarding new third-party inventory partners (Rakuten, Dida), reducing partner onboarding time from 9 months to just 2 weeks using structured prompt templates.',
      'Led the integration of an automated performance testing framework for OMS services, enabling continuous performance validation within CI/CD pipelines at production-equivalent traffic levels.',
    ],
  },
  {
    role: 'Senior Software Engineer II',
    company: 'MakeMyTrip',
    period: 'Jan 2024 — Nov 2024',
    highlights: [
      'Designed and guided the development of the Hotels Re-Booker microservice, enabling automatic rebooking of hotel reservations in response to price fluctuations — delivering ₹3 crore in daily savings during initial rollout.',
    ],
  },
  {
    role: 'Senior Software Engineer I',
    company: 'MakeMyTrip',
    period: 'Jun 2021 — Dec 2023',
    highlights: [
      'Designed and developed the Cross-Lob-Booker microservice, enabling seamless booking orchestration across Hotels, Cabs, and Forex lines of business.',
      'Dockerized and upgraded the Airflow DAG application from EC2 to Fargate, achieving a 6× performance improvement (3 hours → 30 minutes) with auto-scaling.',
      'Orchestrated consolidation of MakeMyTrip and GoIbibo booking engines into a unified platform, reducing development and maintenance costs.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Surewaves MediaTech',
    period: 'Aug 2018 — May 2021',
    highlights: [
      'Implemented a centralized logging system across microservices with correlation IDs, resulting in 2× improvement in bug detection rates and reduced MTTR.',
      'Optimized MySQL schema design through strategic indexing and best practices, achieving 2× acceleration in development velocity.',
    ],
  },
  {
    role: 'Remote Intern',
    company: 'Tata Consultancy Services',
    period: 'Summer 2017',
    highlights: [
      'Developed an Android weather forecasting application with 15-day predictions using REST API integration and efficient data caching.',
    ],
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['Kotlin', 'Java', 'Python', 'C#', 'PHP', 'C++', 'C'],
  },
  {
    category: 'Frameworks',
    items: ['Spring Boot', 'Django', 'Flask', 'Laravel', 'ASP.NET Core'],
  },
  {
    category: 'Databases',
    items: [
      'Elasticsearch',
      'MySQL',
      'MongoDB',
      'Redis',
      'Couchbase',
      'Aurora Serverless',
    ],
  },
  {
    category: 'Tools & Infra',
    items: ['Docker', 'Jenkins', 'Git', 'Bash', 'gRPC', 'Protocol Buffers'],
  },
  {
    category: 'AWS',
    items: [
      'EC2',
      'S3',
      'RDS',
      'Lambda',
      'IAM',
      'ECS',
      'EKS',
      'DynamoDB',
      'Kinesis',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  university: 'Madan Mohan Malaviya University of Technology',
  location: 'Gorakhpur, UP',
  period: '2014 — 2018',
  cgpa: '8.3 / 10',
};

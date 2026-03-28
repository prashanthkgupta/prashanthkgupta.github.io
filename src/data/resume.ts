export const personal = {
  name: 'Prashant Kumar Gupta',
  title: 'Senior Software Engineer III',
  company: 'Expedia Group',
  location: 'Gurugram, Haryana',
  email: 'prashanthkgupta@gmail.com',
  tagline:
    'Backend engineer building high-scale distributed systems. Passionate about performance, clean architecture, and shipping impactful products.',
  resumeUrl: '/Prashant_Gupta.pdf',
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
      'Designed and implemented an AI-assisted AMI upgrade automation system using Claude Code CLI on EC2 with AWS Bedrock, reducing the Solr and ZooKeeper cluster upgrade process from 15 days of manual effort to 15 minutes of automated execution across lab and production environments.',
      'Owned the solution and led a team of 3 developers to deliver an end-to-end Elasticsearch lookup indexing strategy that doubled throughput and reduced query latency by 30%, lowering infra costs while enabling 2× traffic capacity with only a 30% increase in infrastructure investment.',
      'Architected adapter integrations for onboarding new third-party inventory partners (Rakuten, Dida), reducing partner onboarding time from 9 months to just 2 weeks using structured prompt templates.',
      'Led the integration of an automated performance testing framework for OMS services, enabling continuous performance validation within CI/CD pipelines at production-equivalent traffic levels. Delivered cross-team demos driving adoption across multiple engineering teams.',
      'Contributing to the Metasearch Team within Expedia\'s Order Management System, developing and maintaining services for third-party inventory integration and order processing.',
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
      'Orchestrated consolidation of MakeMyTrip and GoIbibo booking engines into a unified platform, reducing development and maintenance costs while accelerating feature delivery across both brands.',
      'Engaged with the hotel ranking team, contributing to booster improvement, documentation, and dockerization of microservices.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Surewaves MediaTech',
    period: 'Aug 2018 — May 2021',
    highlights: [
      'Implemented a centralized logging system across microservices with correlation IDs, resulting in 2× improvement in bug detection rates and reduced MTTR.',
      'Optimized MySQL schema design through strategic indexing and best practices, achieving 2× acceleration in development velocity.',
      'Collaborated with the Data Science team to develop and expose REST APIs for the Dynamic Pricing Engine (DPE) using Django, facilitating seamless integration across microservices.',
      'Led the migration from GCP to AWS by exploring and adopting the vast array of AWS services.',
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

export interface Project {
  title: string;
  company: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: 'AI-Assisted AMI Upgrade Automation',
    company: 'Expedia Group',
    description:
      'Automated Solr and ZooKeeper cluster upgrades using Claude Code CLI on EC2 with AWS Bedrock. Reduced a 15-day manual process to 15 minutes of automated execution across lab and production environments.',
    tech: ['Claude Code CLI', 'AWS Bedrock', 'EC2', 'Solr', 'ZooKeeper', 'Bash'],
  },
  {
    title: 'Elasticsearch Indexing Strategy',
    company: 'Expedia Group',
    description:
      'End-to-end lookup indexing strategy that doubled Elasticsearch throughput and reduced query latency by 30%, enabling 2× traffic capacity with minimal infrastructure increase.',
    tech: ['Kotlin', 'Elasticsearch', 'Spring Boot', 'AWS'],
  },
  {
    title: 'Hotels Re-Booker',
    company: 'MakeMyTrip',
    description:
      'Microservice enabling automatic rebooking of hotel reservations on price drops before check-in, delivering ₹3 crore in daily savings during initial rollout.',
    tech: ['Python', 'Django', 'MySQL', 'Redis'],
  },
  {
    title: 'Cross-Lob-Booker',
    company: 'MakeMyTrip',
    description:
      'Unified booking orchestration microservice enabling seamless communication across Hotels, Cabs, and Forex lines of business.',
    tech: ['Python', 'Django', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Dynamic Pricing Engine',
    company: 'Surewaves MediaTech',
    description:
      'REST APIs for the Dynamic Pricing Engine built in collaboration with the Data Science team, enabling seamless integration with other microservices.',
    tech: ['Python', 'Django', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Online Auction System',
    company: 'B.Tech Major Project',
    description:
      'Comprehensive online auction platform for desktop and web, incorporating blind auction algorithms to facilitate item purchases within an online marketplace.',
    tech: ['Web Platform', 'Blind Auction Algorithms'],
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

export interface Education {
  degree: string;
  university: string;
  location: string;
  period: string;
  score: string;
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    university: 'Madan Mohan Malaviya University of Technology',
    location: 'Gorakhpur, UP',
    period: '2014 — 2018',
    score: 'CGPA: 8.3 / 10',
  },
  {
    degree: 'Intermediate in Science',
    university: 'Saraswati Vidya Mandir',
    location: 'Charkhari, UP',
    period: '2012 — 2013',
    score: '88.8%',
  },
];

export interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'robot' | 'runner' | 'team';
}

export const achievements: Achievement[] = [
  {
    title: 'Go-Tripper of the Month',
    description:
      'Awarded Go-Tripper of the Month at MakeMyTrip in September 2021 and February 2023 for outstanding contributions.',
    icon: 'trophy',
  },
  {
    title: 'E-Yantra Robotics — Runner-Up',
    description:
      'Secured Runner-Up in the E-Yantra Robotics Competition by IIT Bombay. Built a pathfinding robot using image processing, Python, and A* Algorithm.',
    icon: 'robot',
  },
  {
    title: 'Marathon Finisher',
    description:
      'Successfully completed 5K, Half Marathon, and Full Marathon races.',
    icon: 'runner',
  },
  {
    title: 'Robotics Team Executive',
    description:
      'Served as Executive Member of the college Robotics team, organizing biannual events and coordinating CS quiz competitions.',
    icon: 'team',
  },
];

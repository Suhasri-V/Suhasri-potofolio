import { Project, Skill, Experience, Certification, Achievement, PersonalInfo, LinkedInStats, PortfolioData } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Suhasri V',
  tagline: 'Software Testing • Information Technology Student • Developer',
  bio1: 'I am a B.Tech Information Technology student (2024–2028) at SRM Easwari Engineering College, Chennai (Affiliated to Anna University). I am passionate about building strong technical and analytical skills, software testing, and contributing effectively to real-time engineering projects.',
  bio2: 'Outside of software development and testing, I enjoy drawing, photo & video editing, analytical problem-solving, and team collaboration.',
  email: 'suhasri271426@gmail.com',
  githubUsername: 'suhasri-v',
  linkedinUrl: 'https://www.linkedin.com/in/suhasriv/',
  hackerRankUrl: 'https://www.hackerrank.com/profile/Suhasri271426',
  leetcodeUrl: 'https://leetcode.com/u/Suhasri/',
  resumeViewUrl: 'https://drive.google.com/file/d/1wgjAL-nukokIrGxXVOsMceb2ydNPBa7J/view?usp=sharing',
  resumeDownloadUrl: 'https://drive.google.com/file/d/1wgjAL-nukokIrGxXVOsMceb2ydNPBa7J/view?usp=sharing',
  heroBgUrl: 'https://drive.google.com/thumbnail?id=1_DrnraqPZIr7-9NOdK1jgMv10ura3MLt&sz=w1920',
  aboutBgUrl: 'https://drive.google.com/thumbnail?id=16uRnMrmVHfao0RGaeKXZEpIHPqkX5bUp&sz=w1920',
  location: 'Chennai, India',
};

export const SKILLS: Skill[] = [
  {
    id: '1',
    name: 'Java',
    category: 'Programming',
    proficiency: 'Advanced',
    description: 'Object-oriented programming, data structures, exception handling, and interactive application development.',
    projectsUsed: ['Hostel Management System (CRUD Operations)', 'Infosys Springboard Certification'],
  },
  {
    id: '2',
    name: 'Python',
    category: 'Programming',
    proficiency: 'Proficient',
    description: 'Algorithmic problem-solving, data manipulation, backtracking logic, and rapid prototyping.',
    projectsUsed: ['Sudoku Solver (Backtracking Algorithm)', 'Cisco Python Essentials 1 & 2'],
  },
  {
    id: '3',
    name: 'C Programming',
    category: 'Programming',
    proficiency: 'Proficient',
    description: 'Pointers, memory management, file handling, and structured software architecture.',
    projectsUsed: ['Library Management System (File Handling)', 'Code Debugging Competitions'],
  },
  {
    id: '4',
    name: 'HTML & CSS',
    category: 'Frontend',
    proficiency: 'Intermediate',
    description: 'Semantic web layout, responsive styling, modern UI design, and web accessibility fundamentals.',
    projectsUsed: ['Personal Portfolio Website', 'Web Application Interfaces'],
  },
  {
    id: '5',
    name: 'SQL & MongoDB',
    category: 'Backend',
    proficiency: 'Intermediate',
    description: 'Relational database query design, document data modeling, schema optimization, and CRUD operations.',
    projectsUsed: ['MongoDB University Student Basics', 'Database-backed Web Applications'],
  },
  {
    id: '6',
    name: 'Manual & Functional Testing',
    category: 'Testing',
    proficiency: 'Advanced',
    description: 'Test plan creation, functional test case execution, edge-case evaluation, and user story validation.',
    projectsUsed: ['Chennai Metro Rail Limited (Software Testing Internship)', 'Quality Assurance Audits'],
  },
  {
    id: '7',
    name: 'Bug Tracking & Reporting',
    category: 'Testing',
    proficiency: 'Advanced',
    description: 'Identifying edge-case defects, structuring actionable bug reports, root cause isolation, and lifecycle tracking.',
    projectsUsed: ['Chennai Metro Rail Limited Internship', 'Code Gambit Debugging Hackathon (1st Prize Winner)'],
  },
  {
    id: '8',
    name: 'Problem Solving',
    category: 'Soft Skills',
    proficiency: 'Advanced',
    description: 'Deconstructing complex requirements into modular logical steps and optimizing execution strategies.',
    projectsUsed: ['Code Gambit Debugging Hackathon', 'Competitive Programming Challenges'],
  },
  {
    id: '9',
    name: 'Analytical Thinking',
    category: 'Soft Skills',
    proficiency: 'Advanced',
    description: 'Data-driven decision making, identifying pattern anomalies, and systematic root cause analysis.',
    projectsUsed: ['1M1B Green Skills Sustainability Internship', 'Academic Engineering Projects'],
  },
  {
    id: '10',
    name: 'Team Collaboration',
    category: 'Soft Skills',
    proficiency: 'Advanced',
    description: 'Cross-functional teamwork, clear communication, peer code reviews, and project presentation.',
    projectsUsed: ['AICTE Green Internship Project', 'SRM Easwari Hackathon Teams'],
  },
  {
    id: '11',
    name: 'Drawing & Editing',
    category: 'Interests',
    proficiency: 'Creative',
    description: 'Visual media composition, graphic design, photo & video editing, and UI aesthetics.',
    projectsUsed: ['Digital Asset Creation', 'Portfolio Visual Elements'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AquaGuard - Smart Water Quality Monitoring',
    description: 'Smart water quality monitoring system built to detect contamination and deliver real-time alerts. Awarded 2nd Place at QthinkX Ideathon.',
    tags: ['IoT', 'Water Quality', 'Real-time Alerts', 'Hackathon Winner'],
    githubUrl: 'https://aquagurad23.netlify.app/',
    demoUrl: 'https://aquagurad23.netlify.app/',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Hostel Management System (Java)',
    description: 'Built a comprehensive system to manage room allocations, student details, and hostel records with CRUD operations, validations, and efficient data handling.',
    tags: ['Java', 'CRUD Operations', 'System Design'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/project1.jpg',
  },
  {
    id: 2,
    title: 'Sudoku Solver (Python)',
    description: 'Developed a Python-based Sudoku solver utilizing backtracking algorithms with complete grid checking and logic-based solving.',
    tags: ['Python', 'Backtracking', 'Algorithms'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/project2.jpg',
  },
  {
    id: 3,
    title: 'Library Management System (C)',
    description: 'Created a C application to manage book records and issue/return modules using file handling and structured programming.',
    tags: ['C Programming', 'File Handling', 'Data Management'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/project3.jpg',
  },
  {
    id: 4,
    title: 'Hackathon & Debugging Challenges',
    description: 'Participated in competitive hackathons and coding challenges focusing on rapid problem-solving, code debugging, and team collaboration.',
    tags: ['Hackathon', 'Problem Solving', 'Debugging'],
    githubUrl: '#',
    demoUrl: '#',
    image: '/project4.jpg',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: '1st Prize Winner', description: 'Won 1st Prize at Code Gambit Debugging Hackathon.' },
  { id: '2', title: 'NPTEL Elite Certified', description: 'Elite Certification in Introduction to Industry 4.0 & Industrial IoT (Score: 77/100).' },
  { id: '3', title: 'Academic Excellence', description: 'Scored 85% in CBSE Class X & 73% in Class XII at The PSBB Millennium School.' },
];

export const BASIC_CERTIFICATIONS: Certification[] = [
  { id: 'b1', provider: 'Cisco', title: 'Networking Basics, Computer Hardware Basics, Intro to Modern AI, Python Essentials 1 & 2' },
  { id: 'b2', provider: 'Infosys Springboard', title: 'Learn Programming with Java - An Interactive Way' },
  { id: 'b3', provider: 'MongoDB University', title: 'MongoDB Basics for Students, Relational to Document Model' },
  { id: 'b4', provider: 'NPTEL (IIT)', title: 'Privacy and Security in Social Media' },
];

export const PROFESSIONAL_CERTIFICATIONS: Certification[] = [
  {
    id: 'p1',
    provider: 'NPTEL (IIT)',
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    session: 'Jan–Apr 2026',
    duration: '12 Weeks',
    result: 'Elite Certified',
    score: '77/100',
    credits: 4,
    learningOutcomes: [
      'Industry 4.0 Fundamentals',
      'Industrial Internet of Things (IIoT)',
      'Smart Manufacturing & Cyber-Physical Systems',
      'Industrial Automation & IoT Architecture'
    ],
    certificateUrl: '/resume.pdf'
  },
];

export const LINKEDIN_URL = PERSONAL_INFO.linkedinUrl;

export const LINKEDIN_STATS: LinkedInStats = {
  connections: '250+',
  posts: '5+',
  searchAppearances: '900+',
  skills: [
    'Software Testing', 'Manual Testing', 'Test Case Design', 'Java',
    'Python', 'C Programming', 'Bug Tracking', 'HTML', 'CSS', 'SQL'
  ]
};

export const EXPERIENCE: Experience[] = [
  {
    id: 'e1',
    role: 'Green Internship Trainee',
    company: '1M1B Green Skills Academy (Supported by Salesforce & AICTE)',
    period: 'Feb 2026 – Mar 2026 (8 Weeks)',
    description: 'Successfully completed the AICTE-supported Green Internship. Completed 30 hours of sustainability learning and 30 hours of live project work. Applied sustainable development concepts to real-world projects. Enhanced problem-solving, teamwork, communication, and project execution skills.',
    certificateUrl: 'https://drive.google.com/file/d/10CDhk03xzawNcH8gxyhHuWdkJAahXPUE/view?usp=sharing',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Salesforce.com_logo.svg'
  },
  {
    id: 'e2',
    role: 'Software Testing Intern',
    company: 'Chennai Metro Rail Limited',
    period: '1 June 2026 – 30 June 2026',
    description: 'Performed manual and functional testing, including test case design and execution. Handled bug tracking and reporting to support quality assurance processes. Gained hands-on experience with travel system operations.',
    certificateUrl: '/resume.pdf',
    logoUrl: 'https://lh3.googleusercontent.com/d/1y0yb5Wd5ksfHpLnu14I-SACgXpDB310W'
  }
];

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  personalInfo: PERSONAL_INFO,
  skills: SKILLS,
  projects: PROJECTS,
  experience: EXPERIENCE,
  achievements: ACHIEVEMENTS,
  basicCertifications: BASIC_CERTIFICATIONS,
  professionalCertifications: PROFESSIONAL_CERTIFICATIONS,
  linkedinStats: LINKEDIN_STATS,
};



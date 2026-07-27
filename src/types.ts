export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

export interface Skill {
  id?: string;
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Cloud' | string;
  proficiency?: string;
  description?: string;
  projectsUsed?: string[];
}

export interface Experience {
  id?: string;
  role: string;
  company: string;
  period: string;
  description: string;
  certificateUrl?: string;
  logoUrl?: string;
}

export interface Certification {
  id?: string;
  provider: string;
  title: string;
  session?: string;
  duration?: string;
  result?: string;
  score?: string;
  credits?: number;
  learningOutcomes?: string[];
  certificateUrl?: string;
}

export interface Achievement {
  id?: string;
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio1: string;
  bio2: string;
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  hackerRankUrl?: string;
  leetcodeUrl?: string;
  resumeViewUrl: string;
  resumeDownloadUrl: string;
  heroBgUrl?: string;
  aboutBgUrl?: string;
  location?: string;
}

export interface LinkedInStats {
  connections: string;
  posts: string;
  searchAppearances: string;
  skills: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  basicCertifications: Certification[];
  professionalCertifications: Certification[];
  linkedinStats: LinkedInStats;
}


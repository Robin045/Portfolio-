export interface SocialLink {
  platform: 'LinkedIn' | 'GitHub' | 'Twitter' | 'Email' | 'Portfolio' | 'Other';
  url: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'AI / ML' | 'DevOps' | 'All';
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    iconName?: string;
  }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  location?: string;
  gpaOrHonors?: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface PortfolioProfile {
  name: string;
  tagline: string;
  title: string;
  email: string;
  phone?: string;
  location: string;
  availableForHire: boolean;
  noticePeriod?: string;
  about: string[];
  stats: {
    label: string;
    value: string;
  }[];
  socials: SocialLink[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  education: EducationItem[];
  certifications?: CertificationItem[];
}

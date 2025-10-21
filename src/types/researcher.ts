export interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  citations: number;
  doi?: string;
  abstract: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
}

export interface Research {
  id: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed' | 'planned';
  startDate: string;
  endDate?: string;
  collaborators: string[];
  fundingSource?: string;
}

export interface Researcher {
  id: string;
  name: string;
  title: string;
  department: string;
  university: string;
  email: string;
  phone?: string;
  bio: string;
  avatar: string;
  specializations: string[];
  education: {
    degree: string;
    institution: string;
    year: number;
  }[];
  experience: {
    position: string;
    institution: string;
    startYear: number;
    endYear?: number;
  }[];
  publications: Publication[];
  blogPosts: BlogPost[];
  research: Research[];
  awards: string[];
  socialLinks: {
    orcid?: string;
    googleScholar?: string;
    linkedin?: string;
    twitter?: string;
    researchGate?: string;
  };
  stats: {
    totalPublications: number;
    totalCitations: number;
    hIndex: number;
    totalResearchProjects: number;
  };
}
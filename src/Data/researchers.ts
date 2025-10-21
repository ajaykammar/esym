import { Researcher } from '../types/researcher';

export const researchers: Researcher[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Professor of Artificial Intelligence',
    department: 'Computer Science',
    university: 'Stanford University',
    email: 'sarah.chen@stanford.edu',
    phone: '+1 (650) 723-2300',
    bio: 'Dr. Sarah Chen is a leading researcher in artificial intelligence and machine learning, with over 15 years of experience in developing cutting-edge algorithms for natural language processing and computer vision. Her work has been instrumental in advancing the field of deep learning and its applications in healthcare and autonomous systems.',
    avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    specializations: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'],
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'MIT', year: 2008 },
      { degree: 'M.S. in Computer Science', institution: 'Carnegie Mellon University', year: 2004 },
      { degree: 'B.S. in Mathematics', institution: 'UC Berkeley', year: 2002 }
    ],
    experience: [
      { position: 'Professor', institution: 'Stanford University', startYear: 2015 },
      { position: 'Associate Professor', institution: 'Stanford University', startYear: 2012, endYear: 2015 },
      { position: 'Research Scientist', institution: 'Google Research', startYear: 2008, endYear: 2012 }
    ],
    publications: [
      {
        id: 'p1',
        title: 'Transformer Networks for Multi-Modal Learning',
        journal: 'Nature Machine Intelligence',
        year: 2023,
        citations: 127,
        doi: '10.1038/s42256-023-00123-4',
        abstract: 'This paper presents a novel approach to multi-modal learning using transformer architectures, achieving state-of-the-art results across multiple benchmarks.'
      },
      {
        id: 'p2',
        title: 'Ethical Considerations in AI Decision Making',
        journal: 'ACM Computing Surveys',
        year: 2022,
        citations: 89,
        doi: '10.1145/3456789',
        abstract: 'A comprehensive survey of ethical frameworks for AI systems, with practical guidelines for implementation.'
      }
    ],
    blogPosts: [
      {
        id: 'b1',
        title: 'The Future of AI in Healthcare',
        excerpt: 'Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment planning...',
        publishedDate: '2024-01-15',
        readTime: '8 min read',
        tags: ['AI', 'Healthcare', 'Technology']
      },
      {
        id: 'b2',
        title: 'Understanding Transformer Architecture',
        excerpt: 'A deep dive into the mechanics of transformer models and their applications in NLP...',
        publishedDate: '2023-12-10',
        readTime: '12 min read',
        tags: ['Deep Learning', 'NLP', 'Transformers']
      }
    ],
    research: [
      {
        id: 'r1',
        title: 'Autonomous Medical Diagnosis System',
        description: 'Developing AI systems that can accurately diagnose medical conditions from medical imaging data.',
        status: 'ongoing',
        startDate: '2023-01-01',
        collaborators: ['Dr. Michael Johnson', 'Dr. Lisa Wang'],
        fundingSource: 'NIH Grant R01-AI123456'
      },
      {
        id: 'r2',
        title: 'Explainable AI for Financial Services',
        description: 'Creating transparent AI models for risk assessment and fraud detection in banking.',
        status: 'completed',
        startDate: '2021-06-01',
        endDate: '2023-05-31',
        collaborators: ['Dr. Robert Kim'],
        fundingSource: 'NSF Grant IIS-2021001'
      }
    ],
    awards: ['Best Paper Award - ICML 2023', 'Outstanding Faculty Award - Stanford 2022', 'NSF CAREER Award 2018'],
    socialLinks: {
      orcid: '0000-0002-1825-0097',
      googleScholar: 'AbCdEfG',
      linkedin: 'sarah-chen-ai',
      twitter: '@sarahchen_ai',
      researchGate: 'Sarah-Chen-12'
    },
    stats: {
      totalPublications: 47,
      totalCitations: 2847,
      hIndex: 28,
      totalResearchProjects: 12
    }
  },
  {
    id: '2',
    name: 'Dr. Michael Rodriguez',
    title: 'Associate Professor of Quantum Physics',
    department: 'Physics',
    university: 'MIT',
    email: 'mrodriguez@mit.edu',
    bio: 'Dr. Michael Rodriguez is a theoretical physicist specializing in quantum computing and quantum information theory. His research focuses on developing new quantum algorithms and understanding the fundamental principles of quantum mechanics.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    specializations: ['Quantum Computing', 'Quantum Information Theory', 'Theoretical Physics', 'Quantum Algorithms'],
    education: [
      { degree: 'Ph.D. in Physics', institution: 'Caltech', year: 2010 },
      { degree: 'M.S. in Physics', institution: 'University of Chicago', year: 2006 },
      { degree: 'B.S. in Physics', institution: 'Harvard University', year: 2004 }
    ],
    experience: [
      { position: 'Associate Professor', institution: 'MIT', startYear: 2018 },
      { position: 'Assistant Professor', institution: 'MIT', startYear: 2013, endYear: 2018 },
      { position: 'Postdoc', institution: 'Institute for Advanced Study', startYear: 2010, endYear: 2013 }
    ],
    publications: [
      {
        id: 'p3',
        title: 'Quantum Error Correction in NISQ Devices',
        journal: 'Physical Review Letters',
        year: 2023,
        citations: 156,
        abstract: 'Novel approaches to quantum error correction suitable for near-term quantum devices.'
      },
      {
        id: 'p4',
        title: 'Topological Quantum Computing with Majorana Fermions',
        journal: 'Nature Physics',
        year: 2022,
        citations: 203,
        abstract: 'Theoretical framework for fault-tolerant quantum computing using topological qubits.'
      }
    ],
    blogPosts: [
      {
        id: 'b3',
        title: 'Quantum Supremacy: Myth or Reality?',
        excerpt: 'Examining the recent claims of quantum supremacy and what they mean for the future...',
        publishedDate: '2024-01-20',
        readTime: '10 min read',
        tags: ['Quantum Computing', 'Research', 'Technology']
      }
    ],
    research: [
      {
        id: 'r3',
        title: 'Fault-Tolerant Quantum Computing',
        description: 'Developing practical quantum error correction schemes for large-scale quantum computers.',
        status: 'ongoing',
        startDate: '2022-09-01',
        collaborators: ['Dr. Anna Peterson', 'Dr. James Liu'],
        fundingSource: 'DOE Quantum Computing Grant'
      }
    ],
    awards: ['Breakthrough Prize in Fundamental Physics 2023', 'Sloan Research Fellowship 2015'],
    socialLinks: {
      orcid: '0000-0003-2456-7890',
      googleScholar: 'XyZ123',
      twitter: '@quantum_mike'
    },
    stats: {
      totalPublications: 34,
      totalCitations: 1923,
      hIndex: 22,
      totalResearchProjects: 8
    }
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    title: 'Professor of Biomedical Engineering',
    department: 'Biomedical Engineering',
    university: 'Johns Hopkins University',
    email: 'ewatson@jhu.edu',
    bio: 'Dr. Emily Watson is a pioneering biomedical engineer whose work focuses on developing innovative medical devices and therapeutic technologies. Her research has led to breakthrough treatments for cardiovascular diseases and cancer.',
    avatar: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400',
    specializations: ['Biomedical Engineering', 'Medical Devices', 'Tissue Engineering', 'Drug Delivery Systems'],
    education: [
      { degree: 'Ph.D. in Biomedical Engineering', institution: 'Johns Hopkins University', year: 2009 },
      { degree: 'M.S. in Bioengineering', institution: 'University of Pennsylvania', year: 2005 },
      { degree: 'B.S. in Chemical Engineering', institution: 'MIT', year: 2003 }
    ],
    experience: [
      { position: 'Professor', institution: 'Johns Hopkins University', startYear: 2019 },
      { position: 'Associate Professor', institution: 'Johns Hopkins University', startYear: 2014, endYear: 2019 },
      { position: 'Assistant Professor', institution: 'University of California, San Diego', startYear: 2009, endYear: 2014 }
    ],
    publications: [
      {
        id: 'p5',
        title: 'Smart Drug Delivery Systems for Cancer Treatment',
        journal: 'Nature Biomedical Engineering',
        year: 2023,
        citations: 89,
        abstract: 'Development of targeted drug delivery systems that respond to tumor microenvironments.'
      }
    ],
    blogPosts: [
      {
        id: 'b4',
        title: 'The Next Generation of Medical Implants',
        excerpt: 'How smart materials and AI are revolutionizing medical implant technology...',
        publishedDate: '2024-01-10',
        readTime: '7 min read',
        tags: ['Medical Devices', 'Innovation', 'Healthcare']
      }
    ],
    research: [
      {
        id: 'r4',
        title: 'Smart Cardiac Pacemakers',
        description: 'Developing AI-powered pacemakers that adapt to patient activity and health status.',
        status: 'ongoing',
        startDate: '2023-03-01',
        collaborators: ['Dr. Sarah Chen'],
        fundingSource: 'FDA Medical Device Innovation Grant'
      }
    ],
    awards: ['IEEE Engineering in Medicine and Biology Society Award 2022', 'Young Investigator Award 2016'],
    socialLinks: {
      orcid: '0000-0004-3456-7891',
      linkedin: 'emily-watson-biomed'
    },
    stats: {
      totalPublications: 52,
      totalCitations: 2156,
      hIndex: 25,
      totalResearchProjects: 15
    }
  }
];
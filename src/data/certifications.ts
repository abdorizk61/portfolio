// ────────────────────────────────────────────────────────────────────────────────
// src/data/certifications.ts – Structured certification data
// ────────────────────────────────────────────────────────────────────────────────

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  credentialUrl: string;
  skills: string[];
  description?: string;
  partners?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-01',
    title: 'Linear Algebra for Machine Learning and Data Science',
    issuer: 'DeepLearning.AI & Coursera',
    date: 'October 2026',
    category: 'Foundations of ML Mathematics',
    image: '/images/certificates/cert_image-1.png',
    credentialUrl: 'https://coursera.org/share/486790131097f775f59bab42d991508b',
    skills: [
      'Linear Algebra',
      'Eigenvalues & Eigenvectors',
      'PCA',
      'Matrix Decompositions',
      'Mathematics for ML',
    ],
    description:
      'Covered core mathematical foundations for machine learning, including vector spaces, linear transformations, eigenvalues/eigenvectors, and matrix factorizations.',
  },
  {
    id: 'cert-02',
    title: 'Digitera Program – Business Track',
    issuer: 'iCareer & Plan International Egypt (Ready for Tomorrow)',
    partners: 'Danish-Arab Partnership Programme & Ministry of Foreign Affairs of Denmark',
    date: 'September 2026',
    category: 'Professional & Business Development',
    image: '/images/certificates/digitera-business-track.png',
    credentialUrl: '',
    skills: [
      'Business Fundamentals',
      'Professional Development',
      'Career Readiness',
      'Soft Skills',
    ],
    description:
      'Successfully completed the Digitera Business Track under the Youth Inclusion and Employment Program ("Ready for Tomorrow"), demonstrating strong commitment to business fundamentals, career development, and workplace readiness.',
  },
  {
    id: 'cert-03',
    title: 'AI Diploma',
    issuer: 'EraaSoft Academy',
    date: 'August 2026',
    category: 'Deep Learning & Computer Vision',
    image: '/images/certificates/eraasoft-ai-diploma.jpg',
    credentialUrl: '',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Generative Architectures',
      'Neural Networks',
    ],
    description:
      'Comprehensive professional diploma covering Machine Learning, Deep Learning, Computer Vision, and generative architectures.',
  },
  {
    id: 'cert-04',
    title: 'Machine Learning Program',
    issuer: 'Creativa Hub (ITIDA / EME)',
    date: 'February 2025',
    category: 'Applied Machine Learning',
    image: '/images/certificates/creativa-machine-learning.jpg',
    credentialUrl: '',
    skills: [
      'Data Pipelines',
      'Model Optimization',
      'Feature Engineering',
      'Deployment',
    ],
    description:
      '25-hour specialized offline program focused on foundational data pipelines, model optimization, and deployment of the "Spaceship Titanic" project.',
  },
];

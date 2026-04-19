export interface EducationItem {
  school: string
  degree: string
  location: string
  period: string
  focus: string
  coursework: string
  color: string
  flag: string
}

export const education: EducationItem[] = [
  {
    school: 'University of Michigan',
    degree: 'Master of Science in Artificial Intelligence — Computer Vision',
    location: 'Ann Arbor, MI',
    period: '2024 — Expected 2026',
    focus: 'Computer Vision, Machine Learning, and Deep Learning',
    coursework: 'Advanced Computer Vision, Machine Learning, Neural Networks, Autonomous Systems, AI Ethics, Big Data Analytics',
    color: '#3b82f6',
    flag: '🇺🇸',
  },
  {
    school: 'The College of Idaho',
    degree: 'Bachelor of Science — Double Major: Computer Science & Mathematics',
    location: 'Caldwell, ID',
    period: 'Graduated 2018',
    focus: 'Software Engineering | Minors: Psychology and Visual Studies',
    coursework: 'Data Structures (C++), Advanced Statistics, Programming Languages, Applied Databases, Analysis of Algorithms, Digital Electronics, Software Engineering Capstone, Computer Architecture, Linear Algebra',
    color: '#8b5cf6',
    flag: '🇺🇸',
  },
  {
    school: 'University College Utrecht',
    degree: 'Neuroscience Studies',
    location: 'Utrecht, The Netherlands',
    period: '2014',
    focus: 'Cognitive Neuroscience',
    coursework: 'Cognitive Neuroscience (I, II, III), Medical Geography, Dutch Language and Culture, Mechanisms of Diseases, Cell Biology, Psychophysics Lab (MATLAB), Brain Imaging Techniques',
    color: '#06b6d4',
    flag: '🇳🇱',
  },
  {
    school: 'United World College Maastricht',
    degree: 'International Baccalaureate Bilingual Diploma',
    location: 'Maastricht, The Netherlands',
    period: '2012',
    focus: 'International Baccalaureate Program',
    coursework: 'IB Bilingual Diploma curriculum',
    color: '#ec4899',
    flag: '🇳🇱',
  },
]

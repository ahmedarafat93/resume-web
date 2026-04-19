export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'ADAS & Automotive',
    skills: ['Surround View Cameras', 'Blue Cruise', 'ADAS Integration', 'SIL/VIL Testing', 'OTA Updates', 'CAN Communication', 'Automotive Ethernet', 'Vector CANalyzer'],
  },
  {
    name: 'Software & AI',
    skills: ['Python', 'Computer Vision', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'MongoDB', 'Node.js', 'React'],
  },
  {
    name: 'Tools & Methods',
    skills: ['Jira', 'Git', 'Root Cause Analysis', 'System Engineering', 'Cross-Functional Leadership', 'Agile'],
  },
]

export const allSkills = [
  'Python', 'Computer Vision', 'Machine Learning', 'ADAS', 'Blue Cruise',
  'CAN', 'Automotive Ethernet', 'OTA', 'CANalyzer', 'Deep Learning',
  'React', 'Node.js', 'MongoDB', 'Jira', 'SIL/VIL', 'C++', 'MATLAB',
]

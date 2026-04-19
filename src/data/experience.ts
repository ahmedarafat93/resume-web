export interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  bullets: string[]
  color: string
}

export const experience: ExperienceItem[] = [
  {
    title: 'ADAS Vision/Camera Engineer',
    company: 'Ford Motor Company',
    location: 'Dearborn, MI',
    period: 'Jun 2024 — Present',
    color: '#3b82f6',
    bullets: [
      'Coordinate and lead the development, validation, and issue resolution for Surround View Camera functions, ensuring seamless program launches and industry-leading quality.',
      'Collaborate closely with cross-functional teams to ensure timely cascades of interfaces, facilitate cross-functional design and issue resolution activities, and regularly update ADAS and vehicle program management teams on development status.',
      'Manage supplier relationships, enhance system validation methods, and drive continuous quality improvement and cost optimization for ADAS features, specifically cameras and vision systems.',
    ],
  },
  {
    title: 'ADAS Programs & Systems Engineer — Features Integration Lead',
    company: 'Ford Motor Company',
    location: 'Dearborn, MI',
    period: 'Apr 2022 — Jun 2024',
    color: '#8b5cf6',
    bullets: [
      'Served as the key liaison for prototype vehicle fleets, facilitating the successful integration and sign-off of over 20 ADAS features through continuous hardware and software updates, including SIL and VIL.',
      'Specialized in system engineering for Blue Cruise, implementing hands-free driving features with a focus on performance optimization and functional reliability.',
      'Utilized Jira for issue tracking and team coordination, effectively aligning program execution with software delivery timelines.',
      'Spearheaded key projects including a Python-based search tool with a noSQL database, creation of a BusQuery parser for automotive system issue triage, and leadership of Jira projects for managing ADAS fleet OTA updates.',
    ],
  },
  {
    title: 'Software Engineer — OTA, RCA, Critical Software Testing',
    company: 'Ford Motor Company',
    location: 'Allen Park, MI',
    period: 'Jul 2021 — Apr 2022',
    color: '#06b6d4',
    bullets: [
      'Conducted in-vehicle engineering evaluations to identify and debug automotive hardware and software issues.',
      'Provided support for Over The Air (OTA) software updates, ensuring smooth deployment across various teams.',
      'Performed root cause analysis (RCA) for software-related issues, specifically focusing on in-vehicle cloud connectivity and Blue Cruise hands-free driving.',
    ],
  },
  {
    title: 'Software Engineer — Full Stack Web Development',
    company: 'Panaton Software Inc',
    location: 'Boise, ID',
    period: 'Sep 2017 — Sep 2018',
    color: '#ec4899',
    bullets: [
      'Worked as a full-stack engineer, utilizing Meteor, MongoDB, Node.js, and Git.',
      'Gained expertise in secure code writing practices and development processes.',
      'Contributed to weekly meetings with the development team and actively participated in learning testing methods.',
    ],
  },
]

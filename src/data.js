// All portfolio content lives here. Edit this file to update the site.

export const links = {
  github: 'https://github.com/tanzeelasultana',
  linkedin: 'https://www.linkedin.com/in/tanzeela-sultana/',
  resume: '/resume.pdf',
  email: 'tanzeelasultana43@gmail.com',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'problem-solving', label: 'Problem Solving' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  { title: 'Programming', items: ['Java', 'Python'] },
  { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'] },
  {
    title: 'Development Concepts',
    items: ['OOP', 'Data Structures and Algorithms', 'Git', 'Docker'],
  },
]

export const projects = [
  {
    title: 'Campus Connect',
    tag: 'Ongoing project',
    description: 'A college-focused web application that brings different campus-related services together on a unified platform.',
    tech: ['React', 'Python', 'Docker', 'JWT', 'REST APIs'],
    features: ['Role-based authorization', 'JWT authentication', 'Database integration', 'Mobile-responsive UI'],
    github: null,
  },
  {
    title: 'GadgetZone',
    tag: 'E-Commerce Website',
    description: 'An e-commerce website for phone accessories with 12+ products.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Product listing', 'Search functionality', 'Product details modal', 'Shopping cart with LocalStorage', 'Proceed to payment interface', 'Responsive UI'],
    github: 'https://github.com/tanzeelasultana/E-Commerce-Website',
  },
  {
    title: 'Smart Attendance Frontend',
    tag: 'Desktop application',
    description: 'A Java Swing-based attendance management application.',
    tech: ['Java Swing'],
    features: ['Login and registration', 'Dashboard', 'Student management', 'View students', 'QR scanning interface', 'Attendance management'],
    github: 'https://github.com/tanzeelasultana/SmartAttendanceFrontend',
  },
  {
    title: 'K-Bot: Kitchen Safety Robot',
    tag: 'College research project',
    description: 'A college research project focused on kitchen safety. Won Second Prize at College Research Day.',
    tech: ['MQ gas sensors', 'Flame/IR sensors', 'GSM/SMS alerts'],
    features: ['Detects fire/flame', 'Detects LPG/gas leakage'],
    github: null,
  },
  {
    title: 'Disney-Themed Web Page',
    tag: 'Learning project',
    description: 'A Disney-themed webpage created as part of my web development learning journey.',
    tech: ['HTML5', 'CSS3'],
    features: ['Disney-inspired visual design', 'Structured HTML', 'Custom CSS styling', 'Black and gold theme'],
    github: 'https://github.com/tanzeelasultana/Disney-Webpage',
  },
]

export const experiences = [
  {
    title: '30 Days MasterClass in Full Stack Development',
    org: 'NoviTech R&D',
    date: 'April 30 – June 04, 2026',
    description: 'A full-stack development learning experience focused on practical web development.',
  },
  {
    title: 'HackIndia Spark 3 — South India Region',
    org: 'Team Tech Senaa',
    date: 'Sri Venkateshwaraa College of Engineering and Technology',
    description: 'Participated as part of Team Tech Senaa.',
  },
]

export const achievements = [
  {
    title: 'Second Prize — College Research Day',
    subtitle: 'K-Bot Kitchen Safety Robot',
    description: 'A kitchen safety robot that detects fire/flame and LPG/gas leakage using MQ gas sensors and flame/IR sensors, with GSM/SMS alerts.',
  },
  {
    title: 'HackIndia Spark 3 — South India Region',
    subtitle: 'Team Tech Senaa',
    description: 'Participated representing Sri Venkateshwaraa College of Engineering and Technology.',
  },
]

export const interests = [
  'Software Development', 'Full-Stack Development', 'Backend Development', 'Web Development',
  'Artificial Intelligence', 'Problem Solving', 'Building Practical Applications',
]

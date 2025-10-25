import { TechBadgeProps } from '@/app/(pages)/techstack/components/TechBadge';
import { FaAngular, FaJava } from 'react-icons/fa6';
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAngular,
  SiCss3,
  SiEslint,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiNx,
  SiOracle,
  SiSass,
  SiSonarlint,
  SiSpring,
  SiTypescript,
} from 'react-icons/si';

export const jds = [
  'Cross-department collaboration involving 25+ team members on the Web-based system project.',
  'Build front-end UI with Angular and back-end APIs with Spring Framework.',
  'Created 2 shared modules, reducing repetitive code by 20% and improving overall project development efficiency.',
  'Mentored 3 new team members by providing structured learning roadmap and support.',
  'Supported 3 interns by sharing experiences and offering coding suggestions, helping to achieve learning goals.',
];

export const techTools: TechBadgeProps[] = [
  { icon: <SiAngular />, title: 'Angular', color: '#bd002e' },
  { icon: <SiAngular />, title: 'Angular', color: '#eb237b' },
  { icon: <SiSpring />, title: 'SpringFramework', color: '#6db33f' },
  { icon: <SiOracle />, title: 'RDBMS', color: '#c74634' },
  { icon: <SiJenkins />, title: 'Jenkins', color: '#314d5d' },
  { icon: <SiGitlab />, title: 'GitLab', color: '#e24329' },
  { icon: <SiNx />, title: 'Nx', color: '#0f172a' },
  { icon: <SiEslint />, title: 'ESLint', color: '#4b32c3' },
  { icon: <SiSonarlint />, title: 'Sonarlint', color: '#c61f25' },
];

export const techCores: TechBadgeProps[] = [
  { icon: <SiJavascript />, title: 'JavaScript', color: '#999126' },
  { icon: <SiTypescript />, title: 'TypeScript', color: '#3178C6' },
  { icon: <SiCss3 />, title: 'CSS', color: '#1572B6' },
  { icon: <SiHtml5 />, title: 'HTML', color: '#E34F26' },
  { icon: <SiSass />, title: 'Sass', color: '#CC6699' },
  { icon: <FaJava />, title: 'Java', color: '#007396' },
];

export const explores: TechBadgeProps[] = [
  { icon: <RiReactjsFill />, title: 'React', color: '#087ea4' },
  { icon: <RiNextjsFill />, title: 'Next.js', color: '#000000' },
  { icon: <RiTailwindCssFill />, title: 'tailwind', color: '#00bcff' },
  { icon: <SiJavascript />, title: 'JavaScript', color: '#999126' },
  { icon: <SiTypescript />, title: 'TypeScript', color: '#087ea4' },
  { icon: <SiEslint />, title: 'ESLint', color: '#4b32c3' },
];

export const works: TechBadgeProps[] = [
  { icon: <FaAngular />, title: 'Angular', color: '#bd002e' },
  { icon: <SiAngular />, title: 'Angular', color: '#eb237b' },
  { icon: <SiSpring />, title: 'SpringFramework', color: '#6db33f' },
  { icon: <SiOracle />, title: 'RDBMS', color: '#c74634' },
  { icon: <SiJenkins />, title: 'Jenkins', color: '#314d5d' },
  { icon: <SiGitlab />, title: 'GitLab', color: '#e24329' },
  { icon: <SiNx />, title: 'Nx', color: '#0f172a' },
];

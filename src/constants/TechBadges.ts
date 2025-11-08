import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa6';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  SiAngular,
  SiCss3,
  SiEslint,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiNpm,
  SiNx,
  SiOracle,
  SiReact,
  SiSass,
  SiSonarlint,
  SiSpring,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

export interface TechBadgesss {
  title: string;
  icon: IconType;
  color: string;
}

export const TechBadgestmp: TechBadgesss[] = [
  { title: 'React', icon: SiReact, color: '#087ea4' },
  { title: 'Next.js', icon: RiNextjsFill, color: '#000000' },
  { title: 'Tailwind', icon: RiTailwindCssFill, color: '#00bcff' },

  { title: 'JavaScript', icon: SiJavascript, color: '#999126' },
  { title: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { title: 'CSS', icon: SiCss3, color: '#1572B6' },
  { title: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { title: 'Sass', icon: SiSass, color: '#CC6699' },
  { title: 'Java', icon: FaJava, color: '#007396' },

  { title: 'Angular', icon: SiAngular, color: '#bd002e' },
  { title: 'SpringFramework', icon: SiSpring, color: '#6db33f' },
  { title: 'RDBMS', icon: SiOracle, color: '#c74634' },
  { title: 'Jenkins', icon: SiJenkins, color: '#314d5d' },
  { title: 'GitLab', icon: SiGitlab, color: '#e24329' },
  { title: 'Nx', icon: SiNx, color: '#0f172a' },
  { title: 'ESLint', icon: SiEslint, color: '#4b32c3' },
  { title: 'Sonarlint', icon: SiSonarlint, color: '#c61f25' },
];

export interface TechBadge {
  icon: IconType;
  color: string;
}

export const TechBadges: Map<string, TechBadge> = new Map([
  ['React', { icon: SiReact, color: '#087ea4' }],
  ['Next.js', { icon: RiNextjsFill, color: '#000000' }],
  ['Tailwind', { icon: RiTailwindCssFill, color: '#00bcff' }],
  ['JavaScript', { icon: SiJavascript, color: '#999126' }],
  ['TypeScript', { icon: SiTypescript, color: '#3178C6' }],
  ['CSS', { icon: SiCss3, color: '#1572B6' }],
  ['HTML', { icon: SiHtml5, color: '#E34F26' }],
  ['Sass', { icon: SiSass, color: '#CC6699' }],
  ['Java', { icon: FaJava, color: '#007396' }],
  ['Angular', { icon: SiAngular, color: '#bd002e' }],
  ['SpringFramework', { icon: SiSpring, color: '#6db33f' }],
  ['RDBMS', { icon: SiOracle, color: '#c74634' }],
  ['Jenkins', { icon: SiJenkins, color: '#314d5d' }],
  ['GitLab', { icon: SiGitlab, color: '#e24329' }],
  ['Nx', { icon: SiNx, color: '#0f172a' }],
  ['ESLint', { icon: SiEslint, color: '#4b32c3' }],
  ['Sonarlint', { icon: SiSonarlint, color: '#c61f25' }],
  ['GitHub', { icon: SiGithub, color: '#1f2328' }],
  ['npm', { icon: SiNpm, color: '#cb0000' }],
  ['Vercel', { icon: SiVercel, color: '#000000' }],
]);

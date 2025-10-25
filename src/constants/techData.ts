import { IconType } from 'react-icons';
import { FaJava } from 'react-icons/fa6';
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

export interface TechBadge {
  title: string;
  icon: IconType;
  color: string;
  category: 'core' | 'tool' | 'explore';
}

// 1️⃣ 技術陣列：統一管理
export const allTechs: TechBadge[] = [
  // Core
  { title: 'JavaScript', icon: SiJavascript, color: '#999126', category: 'core' },
  { title: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'core' },
  { title: 'CSS', icon: SiCss3, color: '#1572B6', category: 'core' },
  { title: 'HTML', icon: SiHtml5, color: '#E34F26', category: 'core' },
  { title: 'Sass', icon: SiSass, color: '#CC6699', category: 'core' },
  { title: 'Java', icon: FaJava, color: '#007396', category: 'core' },

  // Tools
  { title: 'Angular', icon: SiAngular, color: '#bd002e', category: 'tool' },
  { title: 'SpringFramework', icon: SiSpring, color: '#6db33f', category: 'tool' },
  { title: 'RDBMS', icon: SiOracle, color: '#c74634', category: 'tool' },
  { title: 'Jenkins', icon: SiJenkins, color: '#314d5d', category: 'tool' },
  { title: 'GitLab', icon: SiGitlab, color: '#e24329', category: 'tool' },
  { title: 'Nx', icon: SiNx, color: '#0f172a', category: 'tool' },
  { title: 'ESLint', icon: SiEslint, color: '#4b32c3', category: 'tool' },
  { title: 'Sonarlint', icon: SiSonarlint, color: '#c61f25', category: 'tool' },

  // Explore
  { title: 'React', icon: RiReactjsFill, color: '#087ea4', category: 'explore' },
  { title: 'Next.js', icon: RiNextjsFill, color: '#000000', category: 'explore' },
  { title: 'Tailwind', icon: RiTailwindCssFill, color: '#00bcff', category: 'explore' },
];

// 2️⃣ 自動生成 explores / workWith / techCores / techTools
export const explores = allTechs.filter((t) => t.category === 'explore');
export const techCores = allTechs.filter((t) => t.category === 'core');
export const techTools = allTechs.filter((t) => t.category === 'tool');

// workWith = techCores + techTools - explores
const exploreTitles = new Set(explores.map((e) => e.title));
export const workWith = [...techCores, ...techTools].filter((t) => !exploreTitles.has(t.title));

// 3️⃣ Job Descriptions
export const jobDescriptions = [
  'Cross-department collaboration involving 25+ team members on the Web-based system project.',
  'Build front-end UI with Angular and back-end APIs with Spring Framework.',
  'Created 2 shared modules, reducing repetitive code by 20% and improving overall project development efficiency.',
  'Mentored 3 new team members by providing structured learning roadmap and support.',
  'Supported 3 interns by sharing experiences and offering coding suggestions, helping to achieve learning goals.',
];

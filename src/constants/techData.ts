import TechBadge from '@/components/ExpCard/TechBadge';
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
  SiReact,
  SiSass,
  SiSonarlint,
  SiSpring,
  SiTypescript,
} from 'react-icons/si';

enum TechTag {
  Core,
  Tools,
  FocusOn,
}
const Tg = TechTag;

export interface TechBadge {
  title: string;
  icon: IconType;
  color: string;
  tags: TechTag[];
  focusOn?: boolean;
}

// 1️⃣ 技術陣列：統一管理
export const allTechs: TechBadge[] = [
  // Explore
  { title: 'React', icon: SiReact, color: '#087ea4', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'Next.js', icon: RiNextjsFill, color: '#000000', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'Tailwind', icon: RiTailwindCssFill, color: '#00bcff', tags: [Tg.Core, Tg.FocusOn] },

  // Core
  { title: 'JavaScript', icon: SiJavascript, color: '#999126', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'TypeScript', icon: SiTypescript, color: '#3178C6', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'CSS', icon: SiCss3, color: '#1572B6', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'HTML', icon: SiHtml5, color: '#E34F26', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'Sass', icon: SiSass, color: '#CC6699', tags: [Tg.Core, Tg.FocusOn] },
  { title: 'Java', icon: FaJava, color: '#007396', tags: [Tg.Core] },

  // Tools
  { title: 'Angular', icon: SiAngular, color: '#bd002e', tags: [Tg.Tools] },
  { title: 'SpringFramework', icon: SiSpring, color: '#6db33f', tags: [Tg.Tools] },
  { title: 'RDBMS', icon: SiOracle, color: '#c74634', tags: [Tg.Tools] },
  { title: 'Jenkins', icon: SiJenkins, color: '#314d5d', tags: [Tg.Tools] },
  { title: 'GitLab', icon: SiGitlab, color: '#e24329', tags: [Tg.Tools] },
  { title: 'Nx', icon: SiNx, color: '#0f172a', tags: [Tg.Tools] },
  { title: 'ESLint', icon: SiEslint, color: '#4b32c3', tags: [Tg.Tools, Tg.FocusOn] },
  { title: 'Sonarlint', icon: SiSonarlint, color: '#c61f25', tags: [Tg.Tools] },
];

// 2️⃣ 自動生成 explores / workWith / techCores / techTools
export const explores = allTechs.filter((t) => t.tags.includes(Tg.FocusOn));
export const techCores = allTechs.filter((t) => t.tags.includes(Tg.Core));
export const techTools = allTechs.filter((t) => t.tags.includes(Tg.Tools));

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

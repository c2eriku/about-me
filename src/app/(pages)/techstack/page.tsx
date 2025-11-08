'use client';

import TechBadge from './components/TechBadge';
import MyProjects from './MyProjects';
import { TechBadges } from '@/constants/TechBadges';

const explores = [
  'React',
  'Next.js',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'CSS',
  'HTML',
  'Sass',
  'ESLint',
  'GitHub',
];

const workWiths = [
  'Java',
  'Angular',
  'SpringFramework',
  'RDBMS',
  'Jenkins',
  'GitLab',
  'Nx',
  'Sonarlint',
];

export default function Techstack() {
  return (
    <div className="techstack">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        What I Know Techstack
      </h1>
      <div className="flex flex-wrap">
        <div className="min-w-50 flex-1 p-6">
          <h2>What I Explore</h2>
          <div className="flex flex-wrap gap-1">
            {explores.map((explore, index) => (
              <TechBadge key={index} title={explore} {...TechBadges.get(explore)!} />
            ))}
          </div>
        </div>
        <div className="min-w-50 flex-1 p-6">
          <h2>Also Working With</h2>
          <div className="flex flex-wrap gap-1">
            {workWiths.map((work, index) => (
              <TechBadge key={index} title={work} {...TechBadges.get(work)!} />
            ))}
          </div>
        </div>
      </div>
      <MyProjects></MyProjects>
    </div>
  );
}

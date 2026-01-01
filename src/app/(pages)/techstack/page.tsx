'use client';

import GroupCard from './components/GroupCard';
import MyProjects from './MyProjects';

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
      <h1 className="mt-6 mb-4 text-3xl font-bold text-gray-900 dark:text-white">What I Know</h1>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Tech stacks & Side Projects
      </h2>
      <h3 className="text-md mb-10 text-gray-900 dark:text-white">
        An overview of my skills and experience.
      </h3>

      <div className="mb-10">
        <h1 className="mb-2 text-2xl">Tech Stack</h1>
        <div className="flex flex-wrap gap-5">
          <GroupCard title="What I Explore" techs={explores}></GroupCard>
          <GroupCard title="Also Working With" techs={workWiths}></GroupCard>
        </div>
      </div>

      <h1 className="mb-2 text-2xl">Side Projects</h1>
      <MyProjects></MyProjects>
    </div>
  );
}

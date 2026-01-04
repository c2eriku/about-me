'use client';

import GroupCard from './components/GroupCard';
import { ProjectCard } from './components/ProjectCard';

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
    <main className="techstack">
      <section>
        <h1 className="mt-6 mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Technical Expertise
        </h1>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Tech stacks & Side Projects
        </h2>
        <h3 className="text-md mb-10 text-gray-900 dark:text-white">
          An overview of Eric's skills and experience.
        </h3>
      </section>

      <section className="mb-10">
        <h2 className="mb-2 text-2xl">Tech Stack</h2>
        <div className="flex flex-wrap gap-5">
          <GroupCard title="What I Explore" techs={explores}></GroupCard>
          <GroupCard title="Also Working With" techs={workWiths}></GroupCard>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-2xl">Side Projects</h2>
        <div className="flex flex-wrap gap-5">
          <ProjectCard
            projectname={'ngx-currency-mask'}
            techstacks={['Angular', 'TypeScript', 'Sass', 'GitHub', 'npm']}
          ></ProjectCard>
          <ProjectCard
            projectname={'trady-fee'}
            techstacks={['Next.js', 'React', 'TypeScript', 'GitHub', 'Vercel']}
          ></ProjectCard>
        </div>
      </section>
    </main>
  );
}

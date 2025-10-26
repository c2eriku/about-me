'use client';

import { explores, workWith } from '@/constants/techData';
import TechBadge from './components/TechBadge';
import MyProjects from './MyProjects';

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
              <TechBadge key={index} {...explore} />
            ))}
          </div>
        </div>
        <div className="min-w-50 flex-1 p-6">
          <h2>Also Working With</h2>
          <div className="flex flex-wrap gap-1">
            {workWith.map((work, index) => (
              <TechBadge key={index} {...work} />
            ))}
          </div>
        </div>
      </div>
      <MyProjects></MyProjects>
    </div>
  );
}

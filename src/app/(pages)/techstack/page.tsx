'use client';

import { explores, works } from '@/constants/profileConstants';
import TechBadge from './components/TechBadge';

export default function Techstack() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
        What I Know Techstack
      </h1>
      <div className="flex gap-8">
        <div className="flex-1">
          <div>What I Explore</div>
          <div className="flex flex-wrap gap-2">
            {explores.map((explore, index) => (
              <TechBadge key={index} {...explore} />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div>Also Working With</div>
          <div className="flex flex-wrap gap-2">
            {works.map((work, index) => (
              <TechBadge key={index} {...work} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

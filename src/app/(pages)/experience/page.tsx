'use client';

import ExpCard from '@/components/ExpCard/ExpCard';
import { jobDescriptions } from '@/constants/techData';

export default function Experience() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h1>
      <div>
        <ExpCard title="Software Engineer" jds={jobDescriptions} date={''}></ExpCard>
      </div>
    </>
  );
}

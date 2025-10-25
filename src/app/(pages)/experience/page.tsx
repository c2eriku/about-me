'use client';

import ExpCard from '@/components/ExpCard/ExpCard';
import { jds } from '@/constants/profileConstants';

export default function Experience() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h1>
      <div>
        <ExpCard title="Software Engineer" jds={jds} date={''}></ExpCard>
      </div>
    </>
  );
}

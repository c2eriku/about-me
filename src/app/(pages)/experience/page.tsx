'use client';

import ExpCard from '@/app/(pages)/experience/components/ExpCard/ExpCard';
import { bankJdItems } from '@/constants/techData';

export default function Experience() {
  return (
    <>
      <h1 className="mb-10 text-2xl font-semibold text-gray-900 dark:text-white">Experience</h1>
      <div className="">
        <ExpCard title="Software Engineer" jds={bankJdItems} date={''}></ExpCard>
      </div>
    </>
  );
}

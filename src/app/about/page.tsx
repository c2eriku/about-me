'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="m-6 h-[80vh] w-[85vw] bg-white p-6">
      <div className="h-full w-full border-2 p-6">
        <div className="inline-flex">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/92637603?v=4"
              alt="Profile picture"
              className="rounded-full border-2 border-black"
              width={150}
              height={150}
            />
          </div>
          <div className="mt-4 ml-4 flex flex-col">
            <h1 className="text-3xl font-bold">c2eriku</h1>
            <p className="">description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

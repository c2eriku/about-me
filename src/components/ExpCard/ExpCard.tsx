import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsBank2 } from 'react-icons/bs';
import { FaAngular } from 'react-icons/fa6';
import { SiAngular } from 'react-icons/si';
import TechBadge, { techData } from './TechBadge';

interface ExpCardProps {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  tags: string[];
}

export default function ExpCard() {
  const jds = [
    'Cross-department collaboration involving 25+ team members on the Web-based system project.',
    'Build front-end UI with Angular and back-end APIs with Spring Framework.',
    'Created 2 shared modules, reducing repetitive code by 20% and improving overall project development efficiency.',
    'Mentored 3 new team members by providing structured learning roadmap and support.',
    'Supported 3 interns by sharing experiences and offering coding suggestions, helping to achieve learning goals.',
  ];

  return (
    <div className="flex p-6 pr-12 pl-1">
      <div aria-label="companyIcon">
        <div className="mr-4 rounded-xl bg-linear-to-b from-cyan-100 to-blue-100 p-4">
          <BsBank2 size={32} />
        </div>
      </div>

      <div>
        <div>
          <h1 className="text-2xl">Software Engineer</h1>
        </div>
        <div>
          <h2 className="text-lg">Commercial Bank</h2>
        </div>
        <div className="flex gap-1">
          {techData.map((techData, index) => (
            <TechBadge key={index} title={techData.title} color={techData.color}>
              {techData.children}
            </TechBadge>
          ))}
        </div>
        <div>
          <ul>
            {jds.map((jd, index) => (
              <li key={index}>{jd}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

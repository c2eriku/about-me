import { getProjectDetail } from '@/api/githubApi';
import { TechBadges } from '@/constants/TechBadges';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { BsFolder } from 'react-icons/bs';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  projectname: string;
  techstacks: string[];
}

export function ProjectCard({ projectname, techstacks }: ProjectCardProps) {
  const [description, setDescription] = useState<string | null>(null);
  const [createAt, setCreateAt] = useState<string | null>(null);

  useEffect(() => {
    getProjectDetail(projectname).then((detail) => {
      setDescription(detail.description);
      setCreateAt(detail.created_at);
    });
  }, []);
  return (
    <div className="liquid-wrapper rounded-lg p-4 sm:flex-1">
      <div>
        <div className="2 mb-2 flex items-center">
          <div className="mr-4 ml-2 w-fit rounded-md bg-gradient-to-b from-cyan-100 to-blue-100 p-2">
            <BsFolder size={24} />
          </div>
          <h1 className="text-xl font-medium text-nowrap">{projectname}</h1>
          <div className="ml-auto inline-flex items-center justify-center rounded-full border-1 border-slate-300 bg-slate-100 p-1 px-2.5 text-nowrap">
            {dayjs(createAt).format('YYYY-MM')}
          </div>
        </div>
      </div>
      <div className="px-6">{description}</div>
      <div className="p-4">
        <div className="flex gap-1">
          {techstacks.map((stack, index) => {
            const techBadge = TechBadges.get(stack)!;
            return <TechBadge title={stack} key={index} {...techBadge}></TechBadge>;
          })}
        </div>
      </div>
    </div>
  );
}

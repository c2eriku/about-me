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
    <div className="flex-1 rounded-lg bg-white shadow-md">
      <div>
        <div className="mb-2 flex items-center p-2">
          <div className="mx-2 w-fit rounded-md bg-gradient-to-b from-cyan-100 to-blue-100 p-2">
            <BsFolder size={24} />
          </div>
          <h1 className="text-xl">{projectname}</h1>
          <div className="ml-auto inline-flex items-center justify-center rounded-full border-1 border-slate-300 bg-slate-100 p-1 px-2.5">
            {dayjs(createAt).format('YYYY-MM-DD')}
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

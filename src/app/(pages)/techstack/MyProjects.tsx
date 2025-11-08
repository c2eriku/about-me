import { useEffect, useState } from 'react';
import { getProjectDetail } from '@/api/githubApi';
import { TechBadges } from '@/constants/TechBadges';
import TechBadge from './components/TechBadge';
import dayjs from 'dayjs';
import { BsFolder } from 'react-icons/bs';

export default function MyProjects() {
  return (
    <div>
      <Project
        projectname={'ngx-currency-mask'}
        techstacks={['Angular', 'TypeScript', 'Sass', 'GitHub', 'npm']}
      ></Project>
      <Project
        projectname={'trady-fee'}
        techstacks={['Next.js', 'React', 'TypeScript', 'GitHub', 'Vercel']}
      ></Project>
    </div>
  );
}

interface ProjectProps {
  projectname: string;
  techstacks: string[];
}

function Project({ projectname, techstacks }: ProjectProps) {
  const [description, setDescription] = useState<string | null>(null);
  const [createAt, setCreateAt] = useState<string | null>(null);

  useEffect(() => {
    getProjectDetail(projectname).then((detail) => {
      setDescription(detail.description);
      setCreateAt(detail.created_at);
    });
  }, []);
  return (
    <>
      <div className="flex gap-8 p-4">
        <div className="flex items-center align-middle">
          <div className="w-fit rounded-xl bg-gradient-to-b from-cyan-100 to-blue-100 p-4">
            <BsFolder size={32} />
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-nowrap">{projectname}</div>
          <div className="text-2xl font-bold text-nowrap">
            {dayjs(createAt).format('YYYY-MM-DD')}
          </div>
          <div className="flex gap-1">
            {techstacks.map((stack, index) => {
              const techBadge = TechBadges.get(stack)!;
              return <TechBadge title={stack} key={index} {...techBadge}></TechBadge>;
            })}
          </div>
          <div>{description}</div>
        </div>
      </div>
    </>
  );
}

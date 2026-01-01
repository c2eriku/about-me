import { TechBadges } from '@/constants/TechBadges';
import TechBadge from './TechBadge';

interface GroupCardProps {
  title: string;
  techs: string[];
}

export default function GroupCard({ title, techs }: GroupCardProps) {
  return (
    <div className="min-w-50 flex-1 overflow-auto rounded-lg bg-white shadow-md">
      <div className="bg-black/10 p-2 py-1">
        <h2>{title}</h2>
      </div>
      <div className="flex flex-wrap gap-1 p-4">
        {techs.map((tech, index) => (
          <TechBadge key={index} title={tech} {...TechBadges.get(tech)!} />
        ))}
      </div>
    </div>
  );
}

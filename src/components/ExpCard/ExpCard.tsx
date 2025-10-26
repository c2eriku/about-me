import { BsBank2 } from 'react-icons/bs';
import TechBadge from './TechBadge';
import { techCores, techTools } from '@/constants/techData';

interface ExpCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  date: string;
  tags?: string[];
  jds: string[];
}

export default function ExpCard({ title, jds }: ExpCardProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4 p-6 pr-12 pl-1">
      {/* 左側公司 icon */}
      <div aria-label="companyIcon" className="flex items-center">
        <div className="w-fit rounded-xl bg-gradient-to-b from-cyan-100 to-blue-100 p-4">
          <BsBank2 size={32} />
        </div>
      </div>

      {/* 右側主要內容 */}
      <div className="space-y-2">
        <h1 className="text-2xl">{title}</h1>
        <h2 className="text-lg">Commercial Bank</h2>
      </div>

      <div className="col-span-2 sm:col-start-2">
        <div className="flex flex-wrap gap-1">
          {techTools.map((tool, index) => (
            <TechBadge key={index} {...tool} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {techCores.map((core, index) => (
            <TechBadge key={index} {...core} />
          ))}
        </div>
      </div>

      <ul className="col-span-2 list-inside list-disc text-sm text-gray-700 sm:col-start-2">
        {jds.map((jd, index) => (
          <li key={index}>{jd}</li>
        ))}
      </ul>
    </div>
  );
}

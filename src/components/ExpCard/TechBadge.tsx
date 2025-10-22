import clsx from 'clsx';
import { FaAngular } from 'react-icons/fa6';
import { SiAngular, SiOracle, SiSpring } from 'react-icons/si';

interface TechBadgeProps {
  children: React.ReactNode;
  title?: string;
  color?: string;
}

export default function TechBadge({ children, title, color }: TechBadgeProps) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-lg p-0.5 px-1"
      style={{ color: color, borderColor: color }}
    >
      <div className="flex-1 pr-1 text-2xl">{children}</div>
      {title && <div className="flex-2 text-center">{title}</div>}
    </div>
  );
}

export const techData: TechBadgeProps[] = [
  { children: <FaAngular />, title: 'Angular', color: '#bd002e' },
  { children: <SiAngular />, title: 'Angular', color: '#eb237b' },
  { children: <SiSpring />, title: 'SpringFramework', color: '#6db33f' },
  { children: <SiOracle />, title: 'RDBMS', color: '#c74634' },
];

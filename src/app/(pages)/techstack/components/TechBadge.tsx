import { IconType } from 'react-icons';

export interface TechBadgeProps {
  icon: IconType;
  title: string;
  color: string;
}

export default function TechBadge({ icon: Icon, title, color }: TechBadgeProps) {
  return (
    <div className="flex">
      {/* <div
        className="inline-flex items-center justify-center rounded-lg p-1 px-2 text-slate-50"
        style={{ background: color }}
      >
        <div className="flex-1 pr-1 text-2xl">{icon}</div>
        {title && <div className="hidden flex-2 text-center sm:block">{title}</div>}
      </div> */}

      <div
        className="inline-flex items-center justify-center rounded-lg p-0.5 px-2"
        style={{ color: color, borderColor: color }}
      >
        <Icon size={24} className="flex-1 pr-1 text-2xl"></Icon>
        {title && <div className="hidden flex-2 text-center sm:block">{title}</div>}
      </div>
    </div>
  );
}

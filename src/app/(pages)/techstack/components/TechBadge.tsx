import { IconType } from 'react-icons';

export interface TechBadgeProps {
  title: string;
  icon: IconType;
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
        className="inline-flex items-center justify-center rounded-full border-1 border-slate-300 bg-slate-100 p-1 sm:px-2.5"
        // style={{ color: color, borderColor: color }}
        style={{ color: color }}
      >
        <Icon size={24} className="flex-1 text-2xl md:pr-1" style={{ color: color }}></Icon>
        {title && <div className="hidden flex-2 text-center sm:block">{title}</div>}
      </div>
    </div>
  );
}

interface TechBadgeProps {
  icon: React.ReactNode;
  title?: string;
  color?: string;
}

export default function TechBadge({ icon, title, color }: TechBadgeProps) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-lg p-0.5 px-1"
      style={{ color: color, borderColor: color }}
    >
      <div className="flex-1 pr-1 text-2xl">{icon}</div>
      {title && <div className="hidden flex-2 text-center sm:block">{title}</div>}
    </div>
  );
}

interface TechnologiesCardProps {
  icon: React.ReactNode;
  name: string;
}

export function TechnologiesCard({ icon, name }: TechnologiesCardProps) {
  return (
    <div className="py-3 flex items-center justify-center gap-1.5 rounded-xl border border-slate-900 text-slate-900">
      {icon}
      <span className="text-base font-nunito font-bold">{name}</span>
    </div>
  );
}

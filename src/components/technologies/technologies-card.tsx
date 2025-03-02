interface TechnologiesCardProps {
  icon: React.ReactNode;
  name: string;
}

export function TechnologiesCard({ icon, name }: TechnologiesCardProps) {
  return (
    <div className="py-3 flex items-center justify-center gap-1.5 rounded-xl border text-slate-900">
      {icon}
      <span className="text-base font-nunito font-medium">{name}</span>
    </div>
  );
}

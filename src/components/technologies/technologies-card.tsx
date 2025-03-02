interface TechnologiesCardProps {
  icon: React.ReactNode;
  name: string;
}

export function TechnologiesCard({ icon, name }: TechnologiesCardProps) {
  return (
    <div className="p-6 flex flex-col items-center gap-2 justify-center rounded-xl border border-slate-900 text-slate-900">
      {icon}
      <span className="font-nunito font-bold">{name}</span>
    </div>
  );
}

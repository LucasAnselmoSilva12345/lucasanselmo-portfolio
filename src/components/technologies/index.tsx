import { NextJs } from './technology-icons/nextjs';
import { ReactJS } from './technology-icons/reactjs';
import { TypeScript } from './technology-icons/typescript';
import { TechnologiesCard } from './technologies-card';

export function Technologies() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
      <TechnologiesCard icon={<ReactJS />} name="ReactJs" />
      <TechnologiesCard icon={<TypeScript />} name="TypeScript" />
      <TechnologiesCard icon={<NextJs />} name="NextJs" />
    </div>
  );
}

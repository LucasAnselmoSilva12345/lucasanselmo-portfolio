import { JavaScript } from './technology-icons/javascript';
import { NextJs } from './technology-icons/nextjs';
import { ReactJS } from './technology-icons/reactjs';
import { TypeScript } from './technology-icons/typescript';

export function TechnologiesImageGallery() {
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      <div className="p-6 flex flex-col items-center gap-2 justify-center rounded-xl bg-neutral-950/90 text-neutral-100">
        <ReactJS />
        <span className="font-nunito font-bold">React.JS</span>
      </div>
      <div className="p-6 flex flex-col items-center gap-2 justify-center rounded-xl bg-neutral-950/90 text-neutral-100">
        <NextJs />
        <span className="font-nunito font-bold">Next.JS</span>
      </div>
      <div className="p-6 flex flex-col items-center gap-2 justify-center rounded-xl bg-neutral-950/90 text-neutral-100">
        <TypeScript />
        <span className="font-nunito font-bold">TypeScript</span>
      </div>
      <div className="p-6 flex flex-col items-center gap-2 justify-center rounded-xl bg-neutral-950/90 text-neutral-100">
        <JavaScript />
        <span className="font-nunito font-bold">JavaScript</span>
      </div>
    </div>
  );
}

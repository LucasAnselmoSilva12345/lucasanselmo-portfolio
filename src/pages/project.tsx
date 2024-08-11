import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ProjectList } from '../components/project-list';

export function Project() {
  return (
    <section className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-nunito font-bold">Projects</h1>
        <a
          href="https://github.com/LucasAnselmoSilva12345/"
          className="p-2 flex items-center gap-1.5 text-sm font-bold font-nunito rounded-lg bg-[#1C2129] text-zinc-300"
        >
          <GitHubLogoIcon />
          @LucasAnselmoSilva12345
        </a>
      </div>
      <ProjectList />
    </section>
  );
}

import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { IProjectsData } from '../utils/IProject';

export function ProjectCard({
  title,
  technologies,
  image,
  description,
  links,
}: IProjectsData) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-nunito font-medium">{title}</h2>
        <div className="flex items-center gap-3">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="block py-1 px-2 text-sm font-light font-nunito border border-zinc-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <a href="block w-full">
        <img src={image.src} alt={image.alt} className="my-4 rounded-lg" />
      </a>

      <p className="w-full text-base text-zinc-700 font-nunito">
        {description}
      </p>
      <div className="w-full mt-4 flex items-center gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="flex items-center gap-1 text-base font-nunito font-light underline decoration-sky-700 decoration-1 underline-offset-1"
          >
            {link.label} <ExternalLinkIcon className="text-sky-700" />
          </a>
        ))}
      </div>
    </div>
  );
}

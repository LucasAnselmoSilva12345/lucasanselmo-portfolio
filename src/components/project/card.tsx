import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { IProjectsData } from '../../utils/IProject';

export function Card({
  title,
  technologies,
  image,
  description,
  links,
}: IProjectsData) {
  return (
    <div className="border border-zinc-100">
      <a className="block w-full">
        <img src={image.src} alt={image.alt} className="" />
      </a>
      <div className="p-4 space-y-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-nunito font-semibold lg:text-xl">
            {title}
          </h3>
          <div className="flex items-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="block py-1 px-2 text-xs font-light font-nunito border border-zinc-800 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="w-full text-sm text-zinc-700 font-nunito line-clamp-2">
          {description}
        </p>

        <div className="w-full flex items-center gap-4">
          {links.map((link, index) => (
            <a
              target="_blank"
              key={index}
              href={link.url}
              className="flex items-center gap-1 text-base font-nunito font-light underline decoration-sky-700 decoration-1 underline-offset-1"
            >
              {link.label} <ExternalLinkIcon className="text-sky-700" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

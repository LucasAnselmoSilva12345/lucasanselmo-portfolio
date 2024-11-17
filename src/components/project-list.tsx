import { projectsData } from '../data/projectsData';
import { ProjectCard } from './project-card';

export function ProjectList() {
  return (
    <div className="grid lg:grid-cols-2 gap-2">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

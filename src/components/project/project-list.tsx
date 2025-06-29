import { projectProduction } from '../../data/projectsData';
import { ProjectCard } from './project-card';

export function ProjectList() {
  return (
    <div className="grid lg:grid-cols-2 gap-2 lg:gap-3">
      {projectProduction.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

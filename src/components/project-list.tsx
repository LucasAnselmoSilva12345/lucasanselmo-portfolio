import { projectsData } from '../data/projectsData';
import { ProjectCard } from './project-card';

export function ProjectList() {
  return (
    <>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
}

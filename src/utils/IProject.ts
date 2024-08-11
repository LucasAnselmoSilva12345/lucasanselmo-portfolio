export interface IProjectsData {
  title: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
  };
  description: string;
  links: {
    label: string;
    url: string;
    iconClassName: string;
  }[];
}

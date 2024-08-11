import { IProjectsData } from '../utils/IProject';

export const projectsData: IProjectsData[] = [
  {
    title: 'John Text List',
    technologies: ['React.JS', 'TypeScript', 'TailwindCSS'],
    image: {
      src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Example image',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatum sunt enim aspernatur totam fuga, voluptates labore reiciendis nesciunt velit commodi culpa repudiandae, facilis distinctio incidunt sequi omnis. Nulla, dolorem.',
    links: [
      {
        label: 'View code',
        url: '#',
        iconClassName: 'text-sky-700',
      },
      {
        label: 'View website',
        url: '#',
        iconClassName: 'text-sky-700',
      },
    ],
  },
];

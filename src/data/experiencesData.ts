export interface IExperienceData {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies?: string[];
}

export const experiences: IExperienceData[] = [
  {
    title: "career.experiences.frontend_developer_cpqd.title",
    company: "CPQD",
    period: "Abr 2026 - Presente",
    location: "career.experiences.frontend_developer_cpqd.location",
    description: "career.experiences.frontend_developer_cpqd.description",
    technologies: ["React", "TypeScript", "Material UI"],
  },
  {
    title: "career.experiences.frontend_developer_ecommerce.title",
    company: "Sofá na Caixa",
    period: "Jan 2024 - Mar 2026",
    location: "career.experiences.frontend_developer_ecommerce.location",
    description: "career.experiences.frontend_developer_ecommerce.description",
    technologies: [
      "React",
      "JavaScript",
      "Shopify",
      "HTML",
      "CSS",
      "Scrum",
      "Kanban",
    ],
  },
  {
    title: "career.experiences.intern.title",
    company: "Lepidus Tecnologia",
    period: "Ago 2021 - Ago 2023",
    location: "career.experiences.intern.location",
    description: "career.experiences.intern.description",
    technologies: [
      "Vue.js",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "Docker",
      "Cypress",
    ],
  },
];

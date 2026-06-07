import { useTranslation } from "react-i18next";
import { IExperienceData } from "../../data/experiencesData";

export function Card({
  title,
  company,
  period,
  location,
  description,
  technologies,
}: IExperienceData) {
  const { t } = useTranslation();

  return (
    <div className="border-l border-neutral-300 pl-4 py-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-base font-nunito font-semibold text-neutral-900">
            {t(title)}
          </h3>
          <p className="text-sm font-nunito font-normal text-neutral-600 mt-1">
            {company}
          </p>
        </div>
        <span className="text-xs font-nunito font-normal text-neutral-500 whitespace-nowrap ml-4">
          {period}
        </span>
      </div>

      <p className="text-xs font-nunito font-normal text-neutral-500 mb-3">
        {t(location)}
      </p>

      <p className="text-sm font-nunito font-normal text-neutral-700 mb-4 leading-relaxed">
        {t(description)}
      </p>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-nunito font-medium bg-neutral-100 text-neutral-700 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

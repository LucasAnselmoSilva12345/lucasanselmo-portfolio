import { useTranslation } from 'react-i18next';
import { Technologies } from './technologies';

export function TechStack() {
  const { t } = useTranslation();
  return (
    <div className="w-full mt-4 mb-2 md:max-w-3xl md:mx-auto">
      <h2 className="mb-4 text-lg font-nunito font-semibold">
        {t('technologies.title')}
      </h2>
      <Technologies />
    </div>
  );
}

import { useTranslation } from 'react-i18next';

export function ProfileOverview() {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto">
      <h2 className="mb-2 text-lg font-nunito font-semibold">
        {t('profile.title')}
      </h2>
      <p className="mb-2 text-base font-nunito font-normal text-neutral-700">
        {t('profile.paragraph_initial')}
      </p>
      <p className="mb-2 text-base font-nunito font-normal text-neutral-700">
        {t('profile.paragraph_secondary')}
      </p>
      <p className="text-base font-nunito font-normal text-neutral-700">
        {t('profile.paragraph_third')}
      </p>
    </div>
  );
}

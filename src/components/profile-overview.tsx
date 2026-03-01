import { useTranslation } from 'react-i18next';

export function ProfileOverview() {
  const { t } = useTranslation();

  const paragraphs = t('profile.paragraphs', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="w-full mt-6 mb-2 md:max-w-3xl md:mx-auto">
      <h2 className="mb-2 text-lg font-nunito font-semibold">
        {t('profile.title')}
      </h2>
      <div className="space-y-2">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-base font-nunito font-normal text-neutral-700"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

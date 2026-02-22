import { useTranslation } from 'react-i18next';

const supportedLanguages = ['pt-BR', 'en'];

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const currentLanguage = supportedLanguages.includes(i18n.language)
    ? i18n.language
    : i18n.language.split('-')[0];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <label htmlFor="language-select" className="sr-only">
        {t('common.change_language')}
      </label>

      <div>
        <select
          id="language-select"
          value={currentLanguage}
          onChange={handleChange}
          className="appearance-none bg-transparent border border-gray-300 rounded-lg py-1 px-3 text-sm font-medium text-neutral-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition cursor-pointer"
        >
          <option value="pt-BR">🇧🇷 Brasil</option>
          <option value="en">🇺🇸 USA</option>
        </select>
      </div>
    </>
  );
}

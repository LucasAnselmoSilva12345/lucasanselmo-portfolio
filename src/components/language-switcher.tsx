import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const supportedLanguages = ['pt-BR', 'en'] as const;
const STORAGE_KEY = 'i18nextLng';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const normalizeLanguage = (lng: string) => {
    if (supportedLanguages.includes(lng as any)) return lng;

    const base = lng.split('-')[0];
    return supportedLanguages.includes(base as any) ? base : 'en';
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY);

    if (savedLanguage) {
      const normalized = normalizeLanguage(savedLanguage);

      if (normalized !== i18n.language) {
        i18n.changeLanguage(normalized);
      }
    }
  }, []);

  const currentLanguage = normalizeLanguage(i18n.language);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;

    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem(STORAGE_KEY, selectedLanguage);
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

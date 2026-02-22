import { useTranslation } from 'react-i18next';

const supportedLanguages = ['pt-BR', 'en'];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = supportedLanguages.includes(i18n.language)
    ? i18n.language
    : i18n.language.split('-')[0];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <label htmlFor="language-select" className="sr-only">
        Change language
      </label>

      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleChange}
      >
        <option value="pt-BR">Português</option>
        <option value="en">English</option>
      </select>
    </>
  );
}

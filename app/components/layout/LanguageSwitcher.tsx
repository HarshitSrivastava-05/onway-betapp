import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm ${
          i18n.language === 'en'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('hi')}
        className={`px-2 py-1 rounded-md text-sm ${
          i18n.language === 'hi'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        हि
      </button>
    </div>
  );
}
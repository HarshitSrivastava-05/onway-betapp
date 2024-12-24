import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const buttonClasses = (isActive: boolean) => 
    `px-2 py-1 rounded-md text-sm ${
      mounted && isActive 
        ? 'bg-primary-500 text-white' 
        : 'text-gray-600 hover:bg-gray-100'
    } transition-colors duration-200`;

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={buttonClasses(i18n.language === 'en')}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('hi')}
        className={buttonClasses(i18n.language === 'hi')}
      >
        हि
      </button>
    </div>
  );
}
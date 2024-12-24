import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './config';
import en from './locales/en.json';
import hi from './locales/hi.json';

i18next
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    resources: {
      en: { translation: en },
      hi: { translation: hi }
    }
  });

export default i18next;
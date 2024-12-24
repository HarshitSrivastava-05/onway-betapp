import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './config';
import en from './locales/en.json';
import hi from './locales/hi.json';

let i18nInstance = i18next.createInstance();

i18nInstance
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    resources: {
      en: { common: en },
      hi: { common: hi }
    }
  });

export default i18nInstance;
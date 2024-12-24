import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from './config';
import { resources } from './resources';

// Client-side i18n initialization
i18next
  .use(initReactI18next)
  .init({
    ...i18nConfig,
    resources,
    lng: 'en' // Will be overridden by the loader
  });

export default i18next;
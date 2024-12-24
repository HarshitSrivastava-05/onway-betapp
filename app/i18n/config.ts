import type { InitOptions } from 'i18next';

export const i18nConfig: InitOptions = {
  supportedLngs: ['en', 'hi'],
  defaultNS: 'common',
  fallbackLng: 'en',
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  }
};
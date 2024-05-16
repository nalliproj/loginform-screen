import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './assets/locales/en/translation.json';
import ta from './assets/locales/ta/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ta: { translation: ta }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
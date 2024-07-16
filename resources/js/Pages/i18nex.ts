import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';  // Ensure this is installed

import translationEN from '../../locales/en/translation.json';
import translationFR from '../../locales/fr/translation.json';
import translationES from '../../locales/es/translation.json';
import translationAR from '../../locales/ar/translation.json';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      es: { translation: translationES },
      ar: { translation: translationAR },
    },
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to load translations dynamically if needed
    },
  });

export default i18n;



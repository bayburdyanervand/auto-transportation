import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',  
    // debug: process.env.NODE_ENV === 'development',
     backend: {
      loadPath: '/locales/{{lng}}.json', 
      parse: (data:any) => JSON.parse(data),
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'cookie'],
      caches: ['cookie'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
    interpolation: {
      escapeValue: false,
    },
    lng: navigator.language.split('-')[0],
  });

export default i18n;
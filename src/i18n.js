import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// Safe localStorage access function
const getSafeStorageItem = (key, fallback = null) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key) || fallback;
    }
  } catch (error) {
    console.warn('localStorage access denied:', error.message);
  }
  return fallback;
};

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    lng: getSafeStorageItem("i18nextLng", 'de'),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    // Enable Suspense mode for react-i18next
    react: {
      useSuspense: true,
    },
    // Handle missing keys gracefully
    saveMissing: false,
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      console.warn(`Missing translation key: ${key} for language: ${lng}`);
      return fallbackValue || key;
    },
    // Return key if translation is missing instead of throwing error
    returnEmptyString: false,
    returnNull: false,
  });

export default i18n;

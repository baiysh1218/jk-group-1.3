import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./language/en.json";
import translationRu from "./language/ru.json";
import translationKy from "./language/ky.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEn,
    },
    ru: {
      translation: translationRu,
    },
    ky: {
      translation: translationKy,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from "./locales/en/translation.json"
import ruTranslation from "./locales/ru/translation.json"
import esTranslation from "./locales/es/translation.json"
import enPosts from "./locales/en/posts.json"
import ruPosts from "./locales/ru/posts.json"
import esPosts from "./locales/es/posts.json"


const resources = {
  en: {
    translation: {
      ...enTranslation,
      posts: enPosts
    }
  },
  ru: {
    translation: {
      ...ruTranslation,
      posts: ruPosts
    }
  },
  es: {
    translation: {
      ...esTranslation,
      posts: esPosts
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", // Язык по умолчанию
    interpolation: { escapeValue: false },
  });

export default i18n;
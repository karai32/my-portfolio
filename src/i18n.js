import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from "./locales/en/translation.json"
import ruTranslation from "./locales/ru/translation.json"
import enPosts from "./locales/en/posts.json"
import ruPosts from "./locales/ru/posts.json"


const resources = {
  en: {
    translation: {
      ...enTranslation, // Основной перевод
      posts: enPosts // Добавляем посты внутрь translation
    }
  },
  ru: {
    translation: {
      ...ruTranslation,
      posts: ruPosts
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", // Язык по умолчанию
    interpolation: { escapeValue: false },
  });

export default i18n;
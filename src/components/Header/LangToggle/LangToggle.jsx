import React from 'react';
import { useTranslation } from 'react-i18next';
import './LangToggle.scss'

const LANGS = ['es', 'ru', 'en'];

const LangToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentIndex = LANGS.indexOf(i18n.language);
    const nextLang = LANGS[(currentIndex + 1) % LANGS.length];
    i18n.changeLanguage(nextLang);
  };

  return (
    <button className='LangBtn' onClick={toggleLanguage}>
      <span className={i18n.language === 'es' ? 'active' : ''}>ES</span>
      /
      <span className={i18n.language === 'ru' ? 'active' : ''}>RU</span>
      /
      <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
};

export default LangToggle;

import React from 'react';
import { useTranslation } from 'react-i18next';
import './LangToggle.css'

const LangToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <button className='LangBtn' onClick={toggleLanguage}>
      <span className={i18n.language === 'ru' ? 'active' : ''}>RU</span>
      /
      <span className={i18n.language === 'en' ? 'active' : ''}>EN</span>
    </button>
  );
};

export default LangToggle;

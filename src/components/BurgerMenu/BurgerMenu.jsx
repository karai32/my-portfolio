import React, { useState } from "react";
import { Link } from 'react-scroll';
import { useTranslation } from "react-i18next";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="burger-container">
      {/* Кнопка бургер-меню */}
      <button className="burger-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Выезжающее меню */}
      <div className={`burger-menu ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={closeMenu}>✖</button>
        <ul className="burger-links">
          <li><Link to="about" smooth={true} duration={1000} offset={-85} onClick={closeMenu}>{t("nav.about")}</Link></li>
          <li><Link to="projects" smooth={true} duration={1000} offset={-85} onClick={closeMenu}>{t("nav.portfolio")}</Link></li>
          <li><Link to="contact" smooth={true} duration={1000} offset={-85} onClick={closeMenu}>{t("nav.contact")}</Link></li>
        </ul>
      </div>

      {/* Затемнение фона */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default BurgerMenu;

import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavLinks.css";

const NavLinks = () => {
  const { t } = useTranslation();
  const location = useLocation(); // Для получения текущей страницы
  const navigate = useNavigate(); // Переход
  const [targetSection, setTargetSection] = useState(null); // Секция для кролла

  useEffect(() => {
    if (location.pathname === "/" && targetSection) {
      scroller.scrollTo(targetSection, {
        smooth: true,
        duration: 1000,
        offset: -85,
      });
      setTargetSection(null);
    }
  }, [location.pathname, targetSection]); // Запускаем при изменении пути или целевой секции

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 1000,
        offset: -85,
      });
    } else {
      setTargetSection(section);
      navigate("/");
    }
  };

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li onClick={() => handleNavigation("about")}>
          {t("nav.about")}
        </li>
        <li onClick={() => handleNavigation("projects")}>
          {t("nav.portfolio")}
        </li>
        <li onClick={() => handleNavigation("contact")}>
          {t("nav.contact")}
        </li>

        <li>
          <RouterLink to="/blog">{t("nav.blog")}</RouterLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
